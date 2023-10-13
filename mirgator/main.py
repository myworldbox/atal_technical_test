import os
import csv
import time
import requests
import concurrent.futures

digest = {
    "service": {
        "provider": "mysql",
        "action": "create",
        "password": "2020myworldbox2020",
        "crypto": {
            "name": "aria-128-cfb8",
            "type": "encrypt"
        },
        "hash": [],
        "validation": ["timestamp"],
        "node": "node"
    },
    "data": {}
}

url = "http://localhost:8000/api/database"

target_directory = 'target-directory'

# Get the list of files in the target directory
file_list = os.listdir(target_directory)
num_files = len(file_list)

# Function to send a POST request for a single row
def send_post_request(row):

    digest["data"] = {
        "timestamp": row[0],
        "sensorName": row[1],
        "value": row[2]
    }

    requests.post(url, json=digest)

# Determine the maximum number of concurrent threads based on the number of files
max_workers = min(num_files, 10)

# Create a thread pool executor with the maximum number of concurrent threads
with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
    # Iterate over each file
    for file_name in file_list:
        file_path = os.path.join(target_directory, file_name)

        # Check if the file is a CSV file
        if file_name.endswith('.csv'):
            with open(file_path, 'r') as file:
                reader = csv.reader(file)

                digest["service"]["node"] = os.path.splitext(file_name)[0]

                print(digest["service"]["node"])
                
                # Read and process each row in the CSV file
                for x, row in enumerate(reader):
                    if x != 0:
                        # Submit the send_post_request function as a separate thread
                        executor.submit(send_post_request, row)

                time.sleep(1)