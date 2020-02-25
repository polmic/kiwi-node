import requests
import os
import base64
from os import listdir
from os.path import isfile, join
from shutil import move
from datetime import datetime
api_description_endpoint = "http://localhost:4000/plant-description/"
api_thumbnail_endpoint = "http://localhost:4000/plant-thumbnail/"
#download_folder_path = "/home/pmicas/workspace/repositories/google-images-download/downloads"
download_folder_path = "D:/documents/downloaded_plant_images"


def get_descriptions():
    r = requests.get(api_description_endpoint)
    return r.json()


def rename_files(images_folder_path):
    i = 0
    for filename in listdir(images_folder_path):
        extension = filename[-4:]
        dst = str(i) + extension
        src = images_folder_path + "/" + filename
        dst = images_folder_path + "/" + dst
        move(src, dst)
        i += 1


def upload_images_to_api(images_folder_path, images, description_id):
    for image in images:
        image_path = images_folder_path + "/" + image
        binary = base64.b64encode(open(image_path, 'rb').read()).decode('ascii')
        print(len(binary))
        res = requests.post(
            url = api_thumbnail_endpoint + "/" + description_id,
            data = binary,
            headers = {'Content-Type': 'application/octet-stream'}
        )
        print(image + ' : ' + str(res.status_code))


def description_has_thumbnails(description_id):
    r = requests.get(api_thumbnail_endpoint + "has-thumbnail/" + description_id)    
    return r.json()

startTime = datetime.now()
descriptions = get_descriptions()
nb_empty_thumbnail = 0
for description in descriptions:
    description_id = description['_id']
    print(description_id)
    if (not description_has_thumbnails(description_id)):
        print('no thumbnail yet...')

        commonName = description['commonName'].split(',')[0]
        images_folder_path = download_folder_path + "/" + commonName
        images = [f for f in listdir(images_folder_path) if isfile(join(images_folder_path, f))]
        if (images == []):
            nb_empty_thumbnail += 1

        print('__________________\n')
        print(commonName + " ---> ")
        print(images)
        print('__________________')
        upload_images_to_api(images_folder_path, images, description_id)

endtime = datetime.now() - startTime
print("done in "  + str(endtime))
print(str(nb_empty_thumbnail) + " without thumbnail")