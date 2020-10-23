//GeoJSON file locations
var _1415Data = "../data/geojson14_15";
var _1516Data = "../data/geojson15_16";
var _1617Data = "../data/geojson16_17";
var _1718Data = "../data/geojson17_18";
var _1819Data = "../data/geojson18_19";

//Save the clicked district for later
var preClicked = null;
var preStyle;


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
    center: [46.2296, -94.6859],
    zoom: 6.5,
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
            var incidentTotal = filteredData1415[i].total_incident
            if (filteredData1415[i].number == feature.properties.UNI_MAJ) {
              layer.bindPopup("<h5>" + feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM + "</h5> <hr> <h6>" + "Total Incidents: " + incidentTotal + "</h6>");
              if (incidentTotal <= 10) {
                layer.setStyle({fillColor : "#FAD3D1" });
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
              };
            };
          }; 
        layer.on({click:function(e) {
            if (preClicked !== null) {
                preClicked.setStyle({fillColor:preStyle});
            } 
            preClicked = e.target;
            preStyle = preClicked.options.fillColor;
            
            layer.setStyle({
                fillColor: "yellow"
            });

            setGraphs(feature.properties.UNI_MAJ,'14-15');
        }
        });
      }

      }) 
     
    foufif.addTo(layers.FOUFIF);

  });

// Get 15-16 Incident data
d3.json("../data/incident").then(function(data) {
  filteredData1516 = data.filter(sy => sy.school_year == "15-16");
})

// Get 15-16 GeoJSON
d3.json(_1516Data).then(function(data) {
  var fifsix = L.geoJson(data, {
    style: function(feature) {
      return {
        color: "#030A3E",
        fillColor: "#B4DDF1",
        fillOpacity: 0.8,
        weight: 0.5
      }
    },
    onEachFeature: function(feature, layer) {
      for (var i = 0; i < filteredData1516.length; i++) {
          var incidentTotal = filteredData1516[i].total_incident
          if (filteredData1516[i].number == feature.properties.UNI_MAJ) {
            layer.bindPopup("<h5>" + feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM + "</h5> <hr> <h6>" + "Total Incidents: " + incidentTotal + "</h6>");
            if (incidentTotal <= 10) {
              layer.setStyle({fillColor : "#B4DDF1" });
            } 
            else if (incidentTotal <= 100) {      
              layer.setStyle({fillColor : "#8AC9E8"})      
            }
            else if (incidentTotal <= 500) {
              layer.setStyle({fillColor : "#588195"})  
            }
            else if (incidentTotal <= 1000) {
              layer.setStyle({fillColor : "#38525F"}) 
            }
            else if (incidentTotal > 1000) {
              layer.setStyle({fillColor : "#24353D" }) 
            }   
            else {
              layer.setStyle({fillColor : "white"})  
            };
          };
        };
        layer.on({click:function(e) {
            if (preClicked !== null) {
                preClicked.setStyle({fillColor:preStyle});
            } 
            preClicked = e.target;
            preStyle = preClicked.options.fillColor;
            
            layer.setStyle({
                fillColor: "yellow"
            });

            setGraphs(feature.properties.UNI_MAJ,'15-16');
        }
        });
    }

    })
  fifsix.addTo(layers.FIFSIX);
  
});

// Get 16-17 Incident data
d3.json("../data/incident").then(function(data) {
  filteredData1617 = data.filter(sy => sy.school_year == "16-17");
})

// Get 16-17 GeoJSON
d3.json(_1617Data).then(function(data) {
  var sixsev = L.geoJson(data, {
    style: function(feature) {
      return {
        color: "#000042",
        fillColor: "#ACACFF",
        fillOpacity: 0.8,
        weight: 0.5
      }
    },
    onEachFeature: function(feature, layer) {
      for (var i = 0; i < filteredData1617.length; i++) {
          var incidentTotal = filteredData1617[i].total_incident
          if (filteredData1617[i].number == feature.properties.UNI_MAJ) {
            layer.bindPopup("<h5>" + feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM + "</h5> <hr> <h6>" + "Total Incidents: " + incidentTotal + "</h6>");
            if (incidentTotal <= 10) {
              layer.setStyle({fillColor : "#ACACFF" });
            } 
            else if (incidentTotal <= 100) {      
              layer.setStyle({fillColor : "#7D7DFF"})      
            }
            else if (incidentTotal <= 500) {
              layer.setStyle({fillColor : "#3333FF"})  
            }
            else if (incidentTotal <= 1000) {
              layer.setStyle({fillColor : "#0000CC"}) 
            }
            else if (incidentTotal > 1000) {
              layer.setStyle({fillColor : "#000068" }) 
            }   
            else {
              layer.setStyle({fillColor : "white"})  
            };
          };
        };
        layer.on({click:function(e) {
            if (preClicked !== null) {
                preClicked.setStyle({fillColor:preStyle});
            } 
            preClicked = e.target;
            preStyle = preClicked.options.fillColor;
            
            layer.setStyle({
                fillColor: "yellow"
            });

            setGraphs(feature.properties.UNI_MAJ,'16-17');
        }
        });
    }

  })
  sixsev.addTo(layers.SIXSEV);
  
});


// Get 17-18 Incident data
d3.json("../data/incident").then(function(data) {
  filteredData1718 = data.filter(sy => sy.school_year == "17-18");
})

// Get 17-18 GeoJSON
d3.json(_1718Data).then(function(data) {
  var seveig = L.geoJson(data, {
    style: function(feature) {
      return {
        color: "#1E0B48",
        fillColor: "#DACDF7",
        fillOpacity: 0.8,
        weight: 0.5
      }
    },
    onEachFeature: function(feature, layer) {
      for (var i = 0; i < filteredData1718.length; i++) {
          var incidentTotal = filteredData1718[i].total_incident
          if (filteredData1718[i].number == feature.properties.UNI_MAJ) {
            layer.bindPopup("<h5>" + feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM + "</h5> <hr> <h6>" + "Total Incidents: " + incidentTotal + "</h6>");
            if (incidentTotal <= 10) {
              layer.setStyle({fillColor : "#DACDF7" });
            } 
            else if (incidentTotal <= 100) {      
              layer.setStyle({fillColor : "#C6B2F3"})      
            }
            else if (incidentTotal <= 500) {
              layer.setStyle({fillColor : "#A687EC"})  
            }
            else if (incidentTotal <= 1000) {
              layer.setStyle({fillColor : "#6A5697"}) 
            }
            else if (incidentTotal > 1000) {
              layer.setStyle({fillColor : "#443761" }) 
            }   
            else {
              layer.setStyle({fillColor : "white"})  
            };
          };
        };
        layer.on({click:function(e) {
            if (preClicked !== null) {
                preClicked.setStyle({fillColor:preStyle});
            } 
            preClicked = e.target;
            preStyle = preClicked.options.fillColor;
            
            layer.setStyle({
                fillColor: "yellow"
            });

            setGraphs(feature.properties.UNI_MAJ,'17-18');
        }
        });
    }
  })

  seveig.addTo(layers.SEVEIG);
  
});

// Get 18-19 Incident data
d3.json("../data/incident").then(function(data) {
  filteredData1819 = data.filter(sy => sy.school_year == "18-19");
})

// Get 18-19 GeoJSON
d3.json(_1819Data).then(function(data) {
  var eignin = L.geoJson(data, {
    style: function(feature) {
      return {
        color: "#063A0A",
        fillColor: "#CDDDC7",
        fillOpacity: 0.8,
        weight: 0.5
      }
    },
    onEachFeature: function(feature, layer) {
      for (var i = 0; i < filteredData1819.length; i++) {
          var incidentTotal = filteredData1819[i].total_incident
          if (filteredData1819[i].number == feature.properties.UNI_MAJ) {
            layer.bindPopup("<h5>" + feature.properties.UNI_MAJ + ": " + feature.properties.UNI_NAM + "</h5> <hr> <h6>" + "Total Incidents: " + incidentTotal + "</h6>");
            if (incidentTotal <= 10) {
              layer.setStyle({fillColor : "#CDDDC7" });
            } 
            else if (incidentTotal <= 100) {      
              layer.setStyle({fillColor : "#B1CBA7"})      
            }
            else if (incidentTotal <= 500) {
              layer.setStyle({fillColor : "#85AE76"})  
            }
            else if (incidentTotal <= 1000) {
              layer.setStyle({fillColor : "#556F4B"}) 
            }
            else if (incidentTotal > 1000) {
              layer.setStyle({fillColor : "#364730" }) 
            }   
            else {
              layer.setStyle({fillColor : "white"})  
            };
          };
        };
        layer.on({click:function(e) {
            if (preClicked !== null) {
                preClicked.setStyle({fillColor:preStyle});
            } 
            preClicked = e.target;
            preStyle = preClicked.options.fillColor;
            
            layer.setStyle({
                fillColor: "yellow"
            });

            setGraphs(feature.properties.UNI_MAJ,'18-19');
        }
        });
    }
  })
  eignin.addTo(layers.EIGNIN);
  
});

//Create legends
var legend1415 = L.control.Legend({
    position: 'bottomleft',
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 1,
    legends: [{
      label: "0-10",
      type: "rectangle",
      color: "#FAD3D1",
      fillColor: "#FAD3D1",
      weight: 0.2
    }, {
      label: "10-100",
      type: "rectangle",
      color: "#F3918C",
      fillColor: "#F3918C",
      weight: 0.2
    }, {
      label: "100-500",
      type: "rectangle",
      color: "#EB4F47",
      fillColor: "#EB4F47",
      weight: 0.2
    }, {
      label: "500-1000",
      type: "rectangle",
      color: "#CF2017",
      fillColor: "#CF2017",
      weight: 0.2
    }, {
      label: "> 1000",
      type: "rectangle",
      color: "#8A150F",
      fillColor: "#8A150F",
      weight: 0.2
    }]
  })
  
  var legend1516 = L.control.Legend({
    position: 'bottomleft',
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 1,
    legends: [{
      label: "0-10",
      type: "rectangle",
      color: "#B4DDF1",
      fillColor: "#B4DDF1",
      weight: 0.2
    }, {
      label: "10-100",
      type: "rectangle",
      color: "#8AC9E8",
      fillColor: "#8AC9E8",
      weight: 0.2
    }, {
      label: "100-500",
      type: "rectangle",
      color: "#588195",
      fillColor: "#588195",
      weight: 0.2
    }, {
      label: "500-1000",
      type: "rectangle",
      color: "#38525F",
      fillColor: "#38525F",
      weight: 0.2
    }, {
      label: "> 1000",
      type: "rectangle",
      color: "#24353D",
      fillColor: "#24353D",
      weight: 0.2
    }]
  })

  var legend1617 = L.control.Legend({
    position: 'bottomleft',
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 1,
    legends: [{
      label: "0-10",
      type: "rectangle",
      color: "#ACACFF",
      fillColor: "#ACACFF",
      weight: 0.2
    }, {
      label: "10-100",
      type: "rectangle",
      color: "#7D7DFF",
      fillColor: "#7D7DFF",
      weight: 0.2
    }, {
      label: "100-500",
      type: "rectangle",
      color: "#3333FF",
      fillColor: "#3333FF",
      weight: 0.2
    }, {
      label: "500-1000",
      type: "rectangle",
      color: "#0000CC",
      fillColor: "#0000CC",
      weight: 0.2
    }, {
      label: "> 1000",
      type: "rectangle",
      color: "#000068",
      fillColor: "#000068",
      weight: 0.2
    }]
  })

  var legend1718 = L.control.Legend({
    position: 'bottomleft',
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 1,
    legends: [{
      label: "0-10",
      type: "rectangle",
      color: "#DACDF7",
      fillColor: "#DACDF7",
      weight: 0.2
    }, {
      label: "10-100",
      type: "rectangle",
      color: "#C6B2F3",
      fillColor: "#C6B2F3",
      weight: 0.2
    }, {
      label: "100-500",
      type: "rectangle",
      color: "#A687EC",
      fillColor: "#A687EC",
      weight: 0.2
    }, {
      label: "500-1000",
      type: "rectangle",
      color: "#6A5697",
      fillColor: "#6A5697",
      weight: 0.2
    }, {
      label: "> 1000",
      type: "rectangle",
      color: "#443761",
      fillColor: "#443761",
      weight: 0.2
    }]
  })

  var legend1819 = L.control.Legend({
    position: 'bottomleft',
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 1,
    legends: [{
      label: "0-10",
      type: "rectangle",
      color: "#CDDDC7",
      fillColor: "#CDDDC7",
      weight: 0.2
    }, {
      label: "10-100",
      type: "rectangle",
      color: "#B1CBA7",
      fillColor: "#B1CBA7",
      weight: 0.2
    }, {
      label: "100-500",
      type: "rectangle",
      color: "#85AE76",
      fillColor: "#85AE76",
      weight: 0.2
    }, {
      label: "500-1000",
      type: "rectangle",
      color: "#556F4B",
      fillColor: "#556F4B",
      weight: 0.2
    }, {
      label: "> 1000",
      type: "rectangle",
      color: "#364730",
      fillColor: "#364730",
      weight: 0.2
    }]
  }).addTo(map);

  //function to change legend
var currentLegend = legend1819

map.on('baselayerchange', function(eventLayer) {
    if (eventLayer.name === 'SY 2014-15') {
        map.removeControl(currentLegend);
        currentLegend = legend1415;
        legend1415.addTo(map);
    }
    else if (eventLayer.name === 'SY 2015-16') {
        map.removeControl(currentLegend);
        currentLegend = legend1516;
        legend1516.addTo(map);
    }
    else if (eventLayer.name === 'SY 2016-17') {
        map.removeControl(currentLegend);
        currentLegend = legend1617;
        legend1617.addTo(map);
    }
    else if (eventLayer.name === 'SY 2017-18') {
        map.removeControl(currentLegend);
        currentLegend = legend1718;
        legend1718.addTo(map);
    }
    else if (eventLayer.name === 'SY 2018-19') {
        map.removeControl(currentLegend);
        currentLegend = legend1819;
        legend1819.addTo(map);
    }
})