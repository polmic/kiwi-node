import os

plant_directories_path = 'D:/documents/downloaded_plant_images'

empty_directories_count = 0
plant_directories = os.listdir(plant_directories_path)
for directory in plant_directories:
    if not os.listdir(plant_directories_path + "/" + directory):
        empty_directories_count += 1
        print(str(directory) + " - - - Empty")


print(str(empty_directories_count) + " empty directories")