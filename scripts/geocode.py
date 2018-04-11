import googlemaps
import json, csv
import os

def remove_previous_output(path):
    if os.path.exists(path):
        os.remove(path)

def get_csv_data(path):
    with open(path) as csvdata:
        reader = csv.reader(csvdata)
        return list(reader)

def load_key(path):
    with open(path) as secret:
        return json.load(secret)['pykey']

def geocode_data(data, key):
    gmaps = googlemaps.Client(key=key)
    geocoded_list = list()
    for city_state in data:
        geocoded = gmaps.geocode(city_state)

        if not len(geocoded) > 0:
            continue

        lat = geocoded[0]['geometry']['location']['lat']
        lng = geocoded[0]['geometry']['location']['lng']
        # {title: citystate, location: {lat: , lng: }},
        fmtstr = "{{title: '{}', location:{{lat: {}, lng: {}}}}},".format(city_state, lat, lng)
        geocoded_list.append(fmtstr)
    return geocoded_list

def write_data(path, data):
    with open(path, 'w') as outfile:
        outfile.write("var locations = [\n")

        for geo_location in data:
            outfile.write("\t"+geo_location+"\n")

        outfile.write("];")


if __name__ == "__main__":
    remove_previous_output('data/geocoded/locations.js')
    __key = load_key('secret.json')

    csv_data = get_csv_data('data/raw/meetups.csv')

    # Filter out entries that don't have city/state.
    filtered_data = list(filter(lambda x: x[5] is not '', csv_data))

    # Remove the headers
    del filtered_data[0]

    # Remove duplicates to make processing faster/cheaper
    unique_data = set([x[5] for x in filtered_data])

    coded_data = geocode_data(unique_data, __key)

    write_data('data/geocoded/locations.js', coded_data)
