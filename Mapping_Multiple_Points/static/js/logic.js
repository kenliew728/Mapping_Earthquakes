// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Alternative Method --> Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function (city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population / 200000,
        color: "orange",
        fillColor: '#ffffa1'
    })
        .bindPopup("<h2>" + city.city + " , " + city.state + "</h2> <hr>Population " + city.population.toLocaleString() + "</h3>")

        .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox.streets',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Different map style id available using valid access token:
// mapbox://styles/mapbox.streets-v11
// mapbox://styles/mapbox.light-v10
// mapbox://styles/mapbox.dark-v10
// mapbox://styles/mapbox.satellite-v9
// mapbox://styles/mapbox.streets-satellite-v11
// mapbox://styles/mapbox/navigation-preview-day-v4
// mapbox://styles/mapbox/navigation-preview-night-v4
// mapbox://styles/mapbox/navigation-guidance-day-v4
// mapbox://styles/mapbox/navigation-guidance-night-v4

// Different map style id available but not mentioned in module
// mapbox.wheatpaste
// mapbox.streets-basic
// mapbox.comic
// mapbox.outdoors
// mapbox.run-bike-hike
// mapbox.pirates
// mapbox.emerald
// mapbox.high-contrast