import aiohttp
import asyncio
from bs4 import BeautifulSoup
import json
import os

BASE_URL = "https://law.chdfirms.com/ipc/section/"

async def fetch_html(session, section_number):
    url = f"{BASE_URL}{section_number}/"
    try:
        async with session.get(url) as response:
            if response.status == 200:
                return await response.text()
            else:
                print(f"Error fetching {url}: Status {response.status}")
                return None
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_bailable_status(html):
    soup = BeautifulSoup(html, 'html.parser')
    
    # Find the <td> tag that contains either "bailable" or "non-bailable"
    status_td = soup.find('td', string=lambda text: 'bailable' in text.lower() or 'non-bailable' in text.lower() if text else False)
    
    if status_td:
        status_text = status_td.get_text(strip=True).lower()
        if 'non-bailable' in status_text:
            return "Non-Bailable"
        elif 'bailable' in status_text:
            return "Bailable"
    return "Status not found"

async def scrape_section(session, section_number):
    html = await fetch_html(session, section_number)
    if html:
        status = extract_bailable_status(html)
        return section_number, status
    return section_number, "Failed to retrieve HTML"

async def scrape_all_sections():
    ipc_data = {}
    async with aiohttp.ClientSession() as session:
        tasks = []
        for section_number in range(1, 512):  # Modify range as needed
            tasks.append(scrape_section(session, section_number))
        
        results = await asyncio.gather(*tasks)
        for section_number, status in results:
            ipc_data[section_number] = status
    
    save_as_json(ipc_data)
    return ipc_data

def save_as_json(data):
    os.makedirs('data', exist_ok=True)
    with open('data/ipc_status.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    asyncio.run(scrape_all_sections())
