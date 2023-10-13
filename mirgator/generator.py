import os
import csv
import random
from datetime import datetime

target_directory = 'target-directory'  # Replace with the actual path

# Generate random sensor data
def generate_sensor_data():
    timestamp = datetime.now().isoformat()
    sensor_name = f"Sensor_{random.randint(1, 1000)}"
    value = random.uniform(0, 100)
    return [timestamp, sensor_name, value]

# Determine the number of rows to generate
num_rows = 10  # Example: Generate 1 million rows

# Determine the number of files to generate
num_files = 10

# Generate and write the CSV data in chunks to manage memory efficiently
chunk_size = 100  # Example: Write 10,000 rows at a time

# Create the target directory if it does not exist
os.makedirs(target_directory, exist_ok=True)

for i in range(1, num_files+1):
    file_name = f'file_{i}.csv'
    file_path = os.path.join(target_directory, file_name)

    with open(file_path, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['timestamp', 'sensorName', 'value'])  # Write the header row
        
        for _ in range(0, num_rows, chunk_size):
            chunk_data = [generate_sensor_data() for _ in range(chunk_size)]
            writer.writerows(chunk_data)

    print(f"CSV file '{file_name}' generated with {num_rows} rows.")