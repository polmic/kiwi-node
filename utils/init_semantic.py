import os
import urllib
import io
import requests
from zipfile import ZipFile

public_dir_path = '../public'
semantic_zip_url = 'https://github.com/Semantic-Org/Semantic-UI-CSS/archive/master.zip'
semantic_zip_dir_name = 'Semantic-UI-CSS-master'
semantic_dir_name = 'semantic'

if not os.path.exists(public_dir_path):
    os.makedirs(public_dir_path)

r = requests.get(semantic_zip_url, stream=True)

with ZipFile(io.BytesIO(r.content)) as zipObj:
   zipObj.extractall(public_dir_path)

os.rename(public_dir_path + "/" + semantic_zip_dir_name, public_dir_path + "/" + semantic_dir_name)