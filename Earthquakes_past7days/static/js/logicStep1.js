// Add console.log to check to see if our code is working.
console.log("working");



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox.streets',
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the past 7-days Earthquake data from GeoJSON URL
let past7DaysEarthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// let myStyle = {
//     color: "blue",
//     fillColor: "gold",
//     fillOpacity: 0.1,
//     weight: 0.5
// }

// Retrieving the earthquake GeoJSON Data.
d3.json(past7DaysEarthquakes).then(function (data) {
    console.log(data);

    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map)

    // , {
    //     style: myStyle,
    //     onEachFeature: function (feature, layer) {
    //         layer.bindPopup("<h3>Neighborhood:" + feature.properties.AREA_NAME + "</h3>");
    //     }

    // }).addTo(map);

});

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

    // Different map style id available using valid access token:
    // mapbox://styles/mapbox.streets-v11
    // mapbox://styles/mapbox.light-v10
    // mapbox://styles/mapbox.dark-v10
    // mapbox://styles/mapbox.satellite-v9
    // mapbox://styles/mapbox.satellite-streets-v11
    // mapbox://styles/mapbox/navigation-preview-day-v4
    // mapbox://styles/mapbox/navigation-preview-night-v4
    // mapbox://styles/mapbox/navigation-guidance-day-v4
    // mapbox://styles/mapbox/navigation-guidance-night-v4
    // mapbox://styles/mapbox.outdoors-v11

