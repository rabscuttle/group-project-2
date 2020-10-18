var filterButton = d3.select("#getCharts");
filterButton.on("click", getCharts);

d3.json("../data/gender").then(data => {

  var filteredData = data.filter(sy => sy.school_year == '18-19');
  var name = filteredData.map(sy => sy.name);
  var number = filteredData.map(sy => sy.number);

  var dropdown = d3.select("#district").node();
  
  for (i=0; i< name.length; i++) {
    var option = d3.create("option").node();
    option.text = name[i];
    option.value = number[i]
    dropdown.add(option, i+1);  
  }

});

function getCharts() {
  var district = d3.select("#district").property("value");
  var year =  d3.select("#year").property("value");
  getGenderGraph(district, year);
}

getGenderGraph(1, '14-15');

