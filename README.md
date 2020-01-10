- In Google Sheet Batch geocode with the "Geocode with Awesome Table"

- Convert CSV exported from Google Sheet with :
https://odileeds.github.io/CSV2GeoJSON/


This what an object should looks like (props names !!!):
```json
  {
    "type":"Feature",
    "geometry":{
      "type":"Point",
      "coordinates":[
        -0.4893637,
        49.1439168
      ]
    },
    "properties":{
      "Name":"RUAUX AGRI",
      "Brand":"gregoire",
      "Adresse1":"85 Chemin des Carrières",
      "Adresse2":" ",
      "City":"Marolles",
      "Zip_code":14100,
      "Country":"France",
      "GBgroup_salesman":"David Louveau",
      "GBgroup_salesman_Phonenumber":"06 07 18 26 93",
      "GBgroup_salesman_eMail":"d.louveau@gb-group.co"
    }
  }
```
