// Create the map with our layers
var map = L.map("map", {
  center: [45.9296, -94.6859],
  zoom: 7,
});  

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "streets-v11",
  accessToken: API_KEY
}).addTo(map);

//GeoJSON file locations
var _1415Data = "./resources/school_district_boundaries_2014_15.geojson";

  // Get 14-15 GeoJSON
d3.json(_1415Data).then(function(data) {
    L.geoJson(data).addTo(map);
    console.log(data)
});
