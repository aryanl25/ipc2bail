from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

def load_ipc_data():
    file_path = os.path.join('data', 'ipc_status.json')
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            print("Loaded data:", data)  # Debugging print statement
            return data
    return {}

@app.route('/', methods=['GET', 'POST'])
def display_ipc_status():
    ipc_data = load_ipc_data()
    section_number = None
    status = None

    if request.method == 'POST':
        section_number = request.form['section']
        section_number_str = str(section_number)  # Convert to string
        
        # Check if the section exists in the JSON data
        if section_number_str in ipc_data:
            status = ipc_data[section_number_str]
        else:
            status = "Section not found or bail status not available."

    return render_template('index.html', section_number=section_number, status=status)

@app.route('/api/status/<int:section_number>')
def api_status(section_number):
    ipc_data = load_ipc_data()
    section_number_str = str(section_number)  # Convert to string for API lookup
    status = ipc_data.get(section_number_str, "Section not found or bail status not available.")
    return jsonify({section_number: status})

if __name__ == "__main__":
    app.run(debug=True)
