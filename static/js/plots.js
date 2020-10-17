d3.json("../data/gender").then(data => {

    var female_count = data.map(s => s.female);
    var male_count = data.map(m => m.male);
    var total_female = data.map(tf  => tf.total_female);
    var school_year = data.map(sy => sy.school_year);

    var trace = {
        x: school_year,
        y: total_female,
        name: 'Total Female',
        type: 'bar'
      };

      var trace1 = {
        x: school_year,
        y: female_count,
        name: 'Female Count',
        type: 'bar'
      };
      
      var trace2 = {
        x: school_year,
        y: male_count,
        name: 'Male Count',
        type: 'bar'
      };
      
      var data = [trace, trace1, trace2];
      
      var layout = {barmode: 'group'};
      
      Plotly.newPlot('bar', data, layout);
});