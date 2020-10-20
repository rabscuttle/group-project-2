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

//Layer titles for overlay
var layerTitles = {
  "SY 2014-15": layers.FOUFIF,
  "SY 2015-16": layers.FIFSIX,
  "SY 2016-17": layers.SIXSEV,
  "SY 2017-18": layers.SEVEIG,
  "SY 2018-19": layers.EIGNIN
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
L.control.layers(layerTitles, null, {
    collapsed: false
  }).addTo(map);


// Get 14-15 Incident data
d3.json("../data/incident").then(function(data) {
    filteredData1415 = data.filter(sy => sy.school_year == "14-15");
})

// Get 14-15 GeoJSON
d3.json(_1415Data).then(function(data) {
    var foufif = L.geoJson(data, {
      style: function(feature) {
        return {
          color: "#A30A03",
          fillColor: "#FAD3D1",
          fillOpacity: 0.8,
          weight: 0.5
        }
      },
      onEachFeature: function(feature, layer) {
        for (var i = 0; i < filteredData1415.length; i++) {
            var incidentTotal = filteredData1415[i].disruptive_disorderly
            if (filteredData1415[i].number == feature.properties.UNI_MAJ) {
              layer.bindPopup("<h5>" + feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM + "</h5> <hr> <h6>" + "Total Incidents: " + incidentTotal + "</h6>");
              if (incidentTotal <= 10) {
                layer.setStyle({fillColor : "#FAD3D1" });
                console.log(incidentTotal)
                } 
              else if (incidentTotal <= 100) {      
                layer.setStyle({fillColor : "#F3918C"})  
    
              }
              else if (incidentTotal <= 500) {
                layer.setStyle({fillColor : "#EB4F47"})  
              }
              else if (incidentTotal <= 1000) {
                layer.setStyle({fillColor : "#CF2017"}) 
              }
              else if (incidentTotal > 1000) {
                layer.setStyle({fillColor : "#8A150F" }) 
              }   
              else {
                layer.setStyle({fillColor : "white"})  
              }
            }
          }
      }

      }) 
     
    foufif.addTo(layers.FOUFIF);

  });

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
