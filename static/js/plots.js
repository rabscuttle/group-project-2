
function getGenderGraph(district_number, year) {
  d3.json("../data/gender").then(data => {

    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);

    
    var female_count = filteredData.map(s => s.female);
    var male_count = filteredData.map(m => m.male);
    var total_female = filteredData.map(tf  => tf.total_female);
    var total_male = filteredData.map(tf  => tf.total_male);
    var school_year = filteredData.map(sy => sy.school_year);

    var trace1 = {
        x: school_year,
        y: total_female,
        name: 'Total Female',
        type: 'bar'
      };

      var trace2 = {
        x: school_year,
        y: total_male,
        name: 'Total Male',
        type: 'bar'
      };

      var trace3 = {
        x: school_year,
        y: female_count,
        name: 'Female Count',
        type: 'bar'
      };
      
      var trace4 = {
        x: school_year,
        y: male_count,
        name: 'Male Count',
        type: 'bar'
      };

  
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {barmode: 'group'};
      
      Plotly.newPlot('bar', data, layout);  
  });

}

getGenderGraph(834, '18-19');