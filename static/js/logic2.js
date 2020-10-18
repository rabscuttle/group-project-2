//GeoJSON file locations
var _1415Data = "../data/geojson14_15";
var _1516Data = "../data/geojson15_16";
var _1617Data = "../data/geojson16_17";
var _1718Data = "../data/geojson17_18";
var _1819Data = "../data/geojson18_19";


var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var layers = {
    FOUFIF: new L.LayerGroup(),
    FIFSIX: new L.LayerGroup(),
    SIXSEV: new L.LayerGroup(),
    SEVEIG: new L.LayerGroup(),
    EIGNIN: new L.LayerGroup()
  };


// Create the map with our layers
var map = L.map("map", {
    center: [45.9296, -94.6859],
    zoom: 7,
    layers: [
layers.EIGNIN
    ]
  });  
  
// Add our tile layer to the map
lightmap.addTo(map);  

//Create a layer control and add to map
L.control.layers(layers, null, {
    collapsed: false
  }).addTo(map);


// Style object for 14-15 data
var _1415Style = {
  color: "#A30A03",
  fillColor: "#FAD3D1",
  fillOpacity: 0.2,
  weight: 0.5
};

// Get 14-15 GeoJSON
d3.json(_1415Data).then(function(data) {
    var foufif = L.geoJson(data, {
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM);
      },
      style: _1415Style 
    })
    foufif.addTo(layers.FOUFIF);
    
});

// Style object for 15-16 data
var _1516Style = {
  color: "#030A3E",
  fillColor: "#C2E9F7",
  fillOpacity: 0.2,
  weight: 0.5
};

// Get 15-16 GeoJSON
d3.json(_1516Data).then(function(data) {
  var fifsix = L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM);
    },
    style: _1516Style 
  })
  fifsix.addTo(layers.FIFSIX);
  
});

// Style object for 16-17 data
var _1617Style = {
  color: "#063A0A",
  fillColor: "#C2F7C7",
  fillOpacity: 0.2,
  weight: 0.5
};

// Get 16-17 GeoJSON
d3.json(_1617Data).then(function(data) {
  var sixsev = L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM);
    },
    style: _1617Style 
  })
  sixsev.addTo(layers.SIXSEV);
  
});

// Style object for 17-18 data
var _1718Style = {
  color: "#1E0B48",
  fillColor: "#DACBFC",
  fillOpacity: 0.2,
  weight: 0.5
};

// Get 17-18 GeoJSON
d3.json(_1718Data).then(function(data) {
  var seveig = L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM);
    },
    style: _1718Style 
  })
  seveig.addTo(layers.SEVEIG);
  
});

// Style object for 18-19 data
var _1819Style = {
  color: "#F05512",
  fillColor: "#F5C7B3",
  fillOpacity: 0.2,
  weight: 0.5
};

// Get 18-19 GeoJSON
d3.json(_1819Data).then(function(data) {
  var eignin = L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM);
    },
    style: _1819Style 
  })
  eignin.addTo(layers.EIGNIN);
  
});

