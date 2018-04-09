import googlemaps
import json, csv
import os
import sys

if __name__ == "__main__":
    if os.path.exists('data/geocoded/output.txt'):
        os.remove('data/geocoded/output.txt')

    __key = None
    with open('secret.json') as secret:
        __key = json.load(secret)['pykey']

    gmaps = googlemaps.Client(key=__key)

    with open('data/raw/meetups.csv') as meetups_data:
        reader = csv.reader(meetups_data)
        # Filter out entries that don't have city/state.
        # x[6] = City/State
        filtered_data = filter(lambda x: x[5] is not '', reader)

        # Use a set to filter out any duplicates
        unique_data = set([x[5] for x in filtered_data])

        # skip the first entry since it's the csv header fields
        for num, data_point in enumerate(unique_data):
            if num == 0:
                continue

            geocoded = gmaps.geocode(data_point[6])

            if len(geocoded) > 0:
                geocoded = geocoded[0]
            else:
                continue

            lat = geocoded['geometry']['location']['lat']
            lng = geocoded['geometry']['location']['lng']
            print("{}, {}".format(lat, lng), file=open('data/geocoded/output.txt', 'a'))
