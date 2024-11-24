from scraper import scrape_section

if __name__ == "__main__":
    # Scraping sections from 228 to 511
    for section_number in range(1, 512):  # Adjust range as needed
        scrape_section(section_number)
