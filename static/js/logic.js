// var filterButton = d3.select("#getCharts");
// filterButton.on("click", getCharts);

// d3.json("../data/gender").then(data => {

//   var filteredData = data.filter(sy => sy.school_year == '18-19');
//   var name = filteredData.map(sy => sy.name);
//   var number = filteredData.map(sy => sy.number);

//   var dropdown = d3.select("#district").node();
  
//   for (i=0; i< name.length; i++) {
//     var option = d3.create("option").node();
//     option.text = name[i];
//     option.value = number[i]
//     dropdown.add(option, i+1);  
//   }

//   document.getElementById("district").selectedIndex = "166"

// });

// function getCharts() {
//   var district = d3.select("#district").property("value");
//   var year =  d3.select("#year").property("value");
//   setGraphs(district, year);
// }

// //GeoJSON file locations
// var _1415Data = "../resources/school_district_boundaries_2014_15.geojson";


// var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "streets-v11",
//   accessToken: API_KEY
// });

// var layers = {
//     FOUFIF: new L.LayerGroup(),
//     FIFSIX: new L.LayerGroup(),
//     SIXSEV: new L.LayerGroup(),
//     SEVEIG: new L.LayerGroup(),
//     EIGNIN: new L.LayerGroup()
//   };


// // Create the map with our layers
// var map = L.map("map", {
//     center: [45.9296, -94.6859],
//     zoom: 7,
//     layers: [
//       layers.FOUFIF,
//       layers.FIFSIX,
//       layers.SIXSEV,
//       layers.SEVEIG,
//       layers.EIGNIN
//     ]
//   });  
  
// // Add our tile layer to the map
// streetmap.addTo(map);  

// //Create a layer control and add to map
// L.control.layers(layers, null, {
//     collapsed: false
//   }).addTo(map);

//   // Get 14-15 GeoJSON
// d3.json(_1415Data).then(function(data) {
//     // var test = L.geoJson(data);
//     // test.addTo(layers.FOUFIF);
//     // console.log(test)
//     L.geoJson(data).addTo(map);
// });
