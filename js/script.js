// generated using scripts/geocode.py
const locations = [
	{title: 'Manhattan, NY', location:{lat: 40.7830603, lng: -73.9712488}, track: ['Front End']},
	{title: 'Chicago, IL', location:{lat: 41.8781136, lng: -87.6297982}, track: ['Android Dev', 'Android Basics']},
	{title: 'Indianapolis, IN', location:{lat: 39.768403, lng: -86.158068}, track: ['Track Unspecified', 'Android Basics', 'Front End']},
	{title: 'Mountain View, CA', location:{lat: 37.3860517, lng: -122.0838511}, track: ['Track Unspecified', 'Front End']},
	{title: 'Portland, OR', location:{lat: 45.5230622, lng: -122.6764815}, track: ['Android Basics', 'Front End']},
	{title: 'Cape Girardeau, MO', location:{lat: 37.3058839, lng: -89.51814759999999}, track: ['Front End']},
	{title: 'Philadelphia, PA', location:{lat: 39.9525839, lng: -75.1652215}, track: ['Track Unspecified', 'Android Basics', 'Front End']},
	{title: 'Atlanta, GA', location:{lat: 33.7489954, lng: -84.3879824}, track: ['Android Basics', 'Front End', 'Android Dev']},
	{title: 'Nashville, TN', location:{lat: 36.1626638, lng: -86.7816016}, track: ['Track Unspecified', 'Front End']},
	{title: 'Los Angeles, CA', location:{lat: 34.0522342, lng: -118.2436849}, track: ['Android Basics', 'Track Unspecified', 'Mobile Web', 'Front End', 'Android Dev']},
	{title: 'Irving, TX', location:{lat: 32.8140177, lng: -96.9488945}, track: ['Android Basics', 'Front End']},
	{title: 'St Louis, MO', location:{lat: 38.6270025, lng: -90.19940419999999}, track: ['Android Dev']},
	{title: 'Queens, NY ', location:{lat: 40.7282239, lng: -73.7948516}, track: ['Front End']},
	{title: 'San Diego, CA', location:{lat: 32.715738, lng: -117.1610838}, track: ['Android Basics', 'Track Unspecified', 'Mobile Web', 'Front End', 'Android Dev']},
	{title: 'Newport Beach, CA', location:{lat: 33.6188829, lng: -117.9298493}, track: ['Android Basics']},
	{title: 'New York City, NY', location:{lat: 40.7127753, lng: -74.0059728}, track: ['Android Dev', 'Front End', 'Android Basics']},
	{title: 'Austin, TX', location:{lat: 30.267153, lng: -97.7430608}, track: ['Front End']},
	{title: 'Norfolk, VA', location:{lat: 36.8507689, lng: -76.28587259999999}, track: ['Android Dev']},
	{title: 'San Antonio, TX', location:{lat: 29.4241219, lng: -98.49362819999999}, track: ['Front End']},
	{title: 'Rockville, MD', location:{lat: 39.0839973, lng: -77.1527578}, track: ['Android Basics']},
	{title: 'Salem, OR', location:{lat: 44.9428975, lng: -123.0350963}, track: ['Front End']},
	{title: 'Selinsgrove, PA', location:{lat: 40.7989735, lng: -76.8621935}, track: ['Front End']},
	{title: 'Boston, MA', location:{lat: 42.3600825, lng: -71.0588801}, track: ['Mobile Web', 'Front End']},
	{title: 'Kirkland, WA', location:{lat: 47.6768927, lng: -122.2059833}, track: ['Android Basics', 'Mobile Web']},
	{title: 'La Vista, NE', location:{lat: 41.18388780000001, lng: -96.031127}, track: ['Android Basics']},
	{title: 'Washington, DC', location:{lat: 38.9071923, lng: -77.0368707}, track: ['Track Unspecified', 'Android Basics', 'Android Dev']},
	{title: 'Kansas City, MO', location:{lat: 39.0997265, lng: -94.5785667}, track: ['Android Basics']},
	{title: 'San Francisco, CA', location:{lat: 37.7749295, lng: -122.4194155}, track: ['Android Basics', 'Track Unspecified', 'Mobile Web', 'Front End', 'Android Dev']},
	{title: 'Las Vegas, NV', location:{lat: 36.1699412, lng: -115.1398296}, track: ['Android Dev', 'Front End']},
	{title: 'Plymouth, MI', location:{lat: 42.3714253, lng: -83.4702132}, track: ['Front End']},
	{title: 'Seattle, WA', location:{lat: 47.6062095, lng: -122.3320708}, track: ['Front End']},
	{title: 'Antioch, TN', location:{lat: 36.0597177, lng: -86.6715948}, track: ['Front End']},
	{title: 'Deerfield Beach, FL', location:{lat: 26.3184123, lng: -80.09976569999999}, track: ['Front End']},
	{title: 'Plano, TX', location:{lat: 33.0198431, lng: -96.6988856}, track: ['Android Basics']},
	{title: 'Missouri, MO', location:{lat: 37.9642529, lng: -91.8318334}, track: ['Front End']},
	{title: 'Morrisville, NC', location:{lat: 35.823483, lng: -78.8255621}, track: ['Mobile Web']},
	{title: 'Houston, TX', location:{lat: 29.7604267, lng: -95.3698028}, track: ['Track Unspecified', 'Front End']},
	{title: 'Los Gatos, CA', location:{lat: 37.2358078, lng: -121.9623751}, track: ['Front End']},
	{title: 'San Mateo, CA', location:{lat: 37.5629917, lng: -122.3255254}, track: ['Track Unspecified', 'Front End']},
	{title: 'Redmond, WA', location:{lat: 47.6739881, lng: -122.121512}, track: ['Android Basics']},
	{title: 'Giza', location:{lat: 30.0130557, lng: 31.2088526}, track: ['Front End']},
	{title: 'Walnut Creek, CA ', location:{lat: 37.9100783, lng: -122.0651819}, track: ['Mobile Web']},
	{title: 'San Jose, CA', location:{lat: 37.3382082, lng: -121.8863286}, track: ['Android Dev']},
	{title: 'Oakland Park, FL', location:{lat: 26.1723065, lng: -80.1319893}, track: ['Front End']},
	{title: 'Royal Oak, MI', location:{lat: 42.4894801, lng: -83.1446485}, track: ['Front End']},
	{title: 'Grand Rapids, MI', location:{lat: 42.9633599, lng: -85.6680863}, track: ['Front End']},
	{title: 'Tucson, AZ', location:{lat: 32.2226066, lng: -110.9747108}, track: ['Front End']},
	{title: 'Boulder, CO', location:{lat: 40.0149856, lng: -105.2705456}, track: ['Front End']},
	{title: 'Baltimore, MD', location:{lat: 39.2903848, lng: -76.6121893}, track: ['Front End']},
	{title: 'Raleigh, NC', location:{lat: 35.7795897, lng: -78.6381787}, track: ['Mobile Web']},
	{title: 'Cambridge, MA', location:{lat: 42.3736158, lng: -71.10973349999999}, track: ['Track Unspecified', 'Android Basics']},
	{title: 'Charlotte, NC', location:{lat: 35.2270869, lng: -80.8431267}, track: ['Front End']},
	{title: 'Bellevue, WA', location:{lat: 47.6101497, lng: -122.2015159}, track: ['Android Basics']},
	{title: 'Annandale, VA', location:{lat: 38.8303905, lng: -77.1963703}, track: ['Front End']},
	{title: 'Wilmington, DE', location:{lat: 39.7390721, lng: -75.5397878}, track: ['Track Unspecified', 'Android Basics']},
	{title: 'Charlottesville, VA,', location:{lat: 38.0293059, lng: -78.47667810000002}, track: ['Front End']},
	{title: 'Miami, FL', location:{lat: 25.7616798, lng: -80.1917902}, track: ['Android Dev']},
	{title: 'El Monte, CA', location:{lat: 34.0686206, lng: -118.0275667}, track: ['Front End']},
	{title: 'Omaha, NE', location:{lat: 41.2565369, lng: -95.9345034}, track: ['Track Unspecified']},
	{title: 'Albuquerque, NM', location:{lat: 35.0843859, lng: -106.650422}, track: ['Android Dev']},
	{title: 'Pittsburgh, PA', location:{lat: 40.44062479999999, lng: -79.9958864}, track: ['Track Unspecified', 'Android Basics', 'Android Dev']},
	{title: 'Cincinnati, OH', location:{lat: 39.1031182, lng: -84.5120196}, track: ['Android Basics', 'Front End']},
	{title: 'Morgantown, WV', location:{lat: 39.629526, lng: -79.95589679999999}, track: ['Track Unspecified']},
	{title: 'Phoenix, AZ', location:{lat: 33.4483771, lng: -112.0740373}, track: ['Track Unspecified', 'Front End']},
	{title: 'Hartford, CT', location:{lat: 41.7658043, lng: -72.6733723}, track: ['Android Basics']},
	{title: 'Denver, CO', location:{lat: 39.7392358, lng: -104.990251}, track: ['Track Unspecified']},
	{title: 'Lemon Grove, CA', location:{lat: 32.7425516, lng: -117.0314172}, track: ['Track Unspecified']},
	{title: 'Argyle, TX', location:{lat: 33.1212321, lng: -97.1833475}, track: ['Front End']},
	{title: 'Pasedana, CA', location:{lat: 34.1477849, lng: -118.1445155}, track: ['Front End']},
	{title: 'Bothell, WA', location:{lat: 47.76095, lng: -122.2055884}, track: ['Android Basics']},
	{title: 'Dallas, TX', location:{lat: 32.7766642, lng: -96.79698789999999}, track: ['Front End']},
	{title: 'Milwaukee, WI', location:{lat: 43.0389025, lng: -87.9064736}, track: ['Front End']},
	{title: 'Colorado Springs, CO', location:{lat: 38.8338816, lng: -104.8213634}, track: ['Front End']},
	{title: 'Oklahoma, OK', location:{lat: 35.0077519, lng: -97.092877}, track: ['Track Unspecified']},
	{title: 'Columbia, SC ', location:{lat: 34.0007104, lng: -81.0348144}, track: ['Track Unspecified']},
	{title: 'Arlington, VA', location:{lat: 38.8816208, lng: -77.09098089999999}, track: ['Android Dev', 'Mobile Web']},
	{title: 'Long Island City , NY', location:{lat: 40.744679, lng: -73.9485424}, track: ['Android Dev']},
	{title: 'Douglas, AK', location:{lat: 58.2777689, lng: -134.4080527}, track: ['Track Unspecified']},
	{title: 'Long Beach, CA', location:{lat: 33.7700504, lng: -118.1937395}, track: ['Front End']},
	{title: 'Orinda, CA', location:{lat: 37.8771476, lng: -122.1796888}, track: ['Front End']},
	{title: 'Newark, NJ', location:{lat: 40.735657, lng: -74.1723667}, track: ['Mobile Web']},
	{title: 'Mesa, AZ', location:{lat: 33.4151843, lng: -111.8314724}, track: ['Track Unspecified']},
	{title: 'Bel Air, MD', location:{lat: 39.5359406, lng: -76.34829309999999}, track: ['Track Unspecified']},
	{title: 'Rancho Cucamonga, CA', location:{lat: 34.10639889999999, lng: -117.5931084}, track: ['Track Unspecified']},
	{title: 'Reno, NV', location:{lat: 39.5296329, lng: -119.8138027}, track: ['Mobile Web']},
	{title: 'Saint Charles, MO', location:{lat: 38.7881062, lng: -90.4974359}, track: ['Android Basics']},
	{title: 'Philadelphia, PA ', location:{lat: 39.9525839, lng: -75.1652215}, track: ['Track Unspecified']},
	{title: 'Fort Lauderdale, FL', location:{lat: 26.1224386, lng: -80.13731740000001}, track: ['Android Basics']},
	{title: 'Hillsboro, OR', location:{lat: 45.5228939, lng: -122.989827}, track: ['Android Dev']},
	{title: 'Newcastle, WA', location:{lat: 47.5377028, lng: -122.1657965}, track: ['Android Basics']},
	{title: 'Mercer Island, WA', location:{lat: 47.5706548, lng: -122.2220674}, track: ['Front End']},
	{title: 'Columbus, OH', location:{lat: 39.9611755, lng: -82.99879419999999}, track: ['Front End']},
	{title: 'College Station, TX', location:{lat: 30.627977, lng: -96.3344068}, track: ['Front End']},
];

// initialize as var so we can use it as our callback function
var initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'),{
    // this lat/long combo is the center of the contiguous 48 states of the US
    center: {lat: 39.828175, lng: -98.5795},
    zoom: 4
  });

  for(let i = 0; i < locations.length; i++) {
    const position = locations[i].location;
    const title = locations[i].title;

    const marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
			customInfo: locations[i].track,
      id: i
    });

    marker.addListener('click', function() {
      populateInfoWindow(map, this, new google.maps.InfoWindow());
    });
  }
}

// Similar to the Udacity Google Maps APIs course
const populateInfoWindow = (map, marker, infoWindow) => {
  infoWindow.marker = marker;
	let content = `
	<div>
		<strong>${marker.title}</strong>
		<ul class="list-unstyled">
	`;
	for (let track of marker.customInfo) {
		content += `<li>${track}</li>`;
	}
	content += '</ul></div>';

	infoWindow.setContent(content);
  infoWindow.open(map, marker);
  infoWindow.addListener('closeclick', function() {
    infoWindow.marker = null;
  });
}
