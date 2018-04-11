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
```

Next, you'll need to get an [API key](https://github.com/googlemaps/google-maps-services-python#api-keys).
Once you have obtained an API key, create a file named `secret.json` and add the following entry:

```json
{"pykey": "YOUR_API_KEY"}
```

`scripts/geocode.py` will read this `pykey` field to obtain your API key at run time.

**Note:** `secret.json` is ignored by `.gitignore`. We don't want your secrets in our repo :smile:

Finally, run `scripts/geocode.py`:

```shell
(maps) $ python scripts/geocode.py
```

## Displaying the Data
We are using [Google Maps](https://developers.google.com/maps/get-started/) to display the data.

**This is a work-in-progress**

In order to get the map to display, you'll need to insert your own API key into the URL: `key=YOUR_API_KEY`.
