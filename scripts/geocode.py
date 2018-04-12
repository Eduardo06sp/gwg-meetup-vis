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

def geocode_data(data_dict, key):
    gmaps = googlemaps.Client(key=key)
    geocoded_list = list()
    for city_state in data_dict.keys():
        geocoded = gmaps.geocode(city_state)

        if not len(geocoded) > 0:
            continue

        lat = geocoded[0]['geometry']['location']['lat']
        lng = geocoded[0]['geometry']['location']['lng']
        # {title: citystate, location: {lat: , lng: }},
        fmtstr = "{{title: '{}', location:{{lat: {}, lng: {}}}, track: {}}},".format(city_state, lat, lng, list(data_dict[city_state]))
        geocoded_list.append(fmtstr)
    return geocoded_list

def write_data(path, data):
    with open(path, 'w') as outfile:
        outfile.write("var locations = [\n")

        for geo_location in data:
            outfile.write("\t"+geo_location+"\n")

        outfile.write("];")

def remove_free_form(data_list):
    new_list = list()
    new_list.append(data_list[5])
    new_list.append(data_list[2])
    return new_list

def determine_track(data_list):
    event_name = data_list[1].upper()
    result = None

    if 'ANDROID DEV' in event_name or 'ANDROID INT' in event_name:
        result = 'Android Dev'
    if 'ANDROID BASICS' in event_name:
        result = 'Android Basics'
    if 'FRONT' in event_name:
        result = 'Front End'
    if 'MOBILE' in event_name:
        result = 'Mobile Web'

    data_list[1] = result if result else 'Track Unspecified'
    return data_list

def convert_to_dict(data_list):
    # 0 = city/state, 1 = track
    result = dict()
    for sublist in data_list:
        if sublist[0] in result:
            result[sublist[0]].add(sublist[1])
        else:
            result[sublist[0]] = set()
            result[sublist[0]].add(sublist[1])

    return result


if __name__ == "__main__":
    remove_previous_output('data/geocoded/locations.js')
    csv_data = get_csv_data('data/raw/meetups.csv')

    # Remove the headers
    del csv_data[0]

    # Filter out entries that don't have city/state.
    filtered_data = list(filter(lambda x: x[5] is not '', csv_data))
    no_freeform = list(map(remove_free_form, filtered_data))
    track_data = list(map(determine_track, no_freeform))
    track_data_dict = convert_to_dict(track_data)
    #print(track_data_dict)
    coded_data = geocode_data(track_data_dict, load_key('secret.json'))

    write_data('data/geocoded/locations.js', coded_data)
