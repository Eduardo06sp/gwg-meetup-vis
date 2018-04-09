# gwg-meetup-vis
Visualizing the Meet Up data from the Grow with Google Udacity scholarship.


## The Data
I created a copy of [this Google Sheet](https://docs.google.com/spreadsheets/d/1lkgHakwCBx9FwEk64dHeNiEZn_NfFjuh4VjWM443oZQ/edit#gid=1547637511) local
to my Google Drive instance and downloaded a `.csv` version for use.


**Note:** I updated a single entry for 'Morgantown' - the address contained an erroneous new-line character.

## Generating the Geocoded Data
The geocoded data is generated using the [Google Maps Python client](https://github.com/googlemaps/google-maps-services-python).

The output file is located in `data/geocoded/output.txt`.

To use the script, you'll need:
  * A Python3 installation
  * `pip`

I used an [Anaconda](https://www.anaconda.com/) virtual environment.

To mimic my setup, install Anaconda and then create the virtual environment:

```shell
$ conda create -n maps python=3.6 -y -q
$ source activate maps
(maps) $ pip install -U googlemaps
(maps) $ python scripts/geocode.py
```
