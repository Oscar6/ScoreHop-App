mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXI2IiwiYSI6ImNqcHc0Nm1iejAxYmozeGxzcDM3MmQ1ZmYifQ.SpDPryg7o1dzi6sgVlO0GQ'; // replace this with your access token

// Coordinates longitude - latitude
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-95.3560, 29.7487]
        },
        properties: {
            title: '8th Wonder Brewery',
            // description: 'Near you',
            "iconSize": [25, 25]
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-95.3435, 29.7492]
        },
        properties: {
            title: 'Sigma Brewing Company',
            // description: 'Near you',
            "iconSize": [25, 25]
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-95.4608, 29.8058]
        },
        properties: {
            title: 'Karbach Brewing Co.',
            // description: 'Near you',
            "iconSize": [25, 25]
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-95.3486, 29.7711]
        },
        properties: {
            title: 'Saint Arnold Brewing Company',
            // description: 'Near you',
            "iconSize": [25, 25]
        }
    }]
};

// Start Location
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-95.3698, 29.7604],
    zoom: 11
});

map.addControl(new mapboxgl.NavigationControl());

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map))

var popup = new mapboxgl.Popup({ offset: 38 })
    .setText('Houston, Texas');
    

var marker = new mapboxgl.Marker({color:'red'})
    .setLngLat([-95.3698, 29.7604])
    .setPopup(popup)
    .addTo(map);




geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var popup = new mapboxgl.Popup({offset: 10})
    .setHTML('<b>' + marker.properties.title + '</b>');

    var beer = document.createElement('div');
    beer.className = 'beerIcon';
    beer.style.backgroundImage = 'url(/icons/beermug.svg)' + marker.properties.iconSize;
    beer.style.width = marker.properties.iconSize[0] + 'px';
    beer.style.height = marker.properties.iconSize[1] + 'px';

    // beer.addEventListener('click', function() {
    //     window.alert(marker.properties.message);
    // });

    // add marker to map
    new mapboxgl.Marker(beer)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
});