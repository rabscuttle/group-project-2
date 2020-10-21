
function getLineGraph(district) {

  d3.json("../data/incident").then((data) => {
    
    //Filter by district sent int
    var filteredData = data.filter(sy => sy.number == district);

    //Get the total enrollment and total incidents for the district
    var total_enrollment = filteredData.map(sy => sy.total_enrollment);
    var total_incident = filteredData.map(sy => sy.total_incident);

    //Create the apexchart line graph
    var options = {
      series: [
      {
        name: "Enrollment",
        data: total_enrollment
      },
      {
        name: "Incident",
        data: total_incident
      }
    ],
      chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#7790ad', '#8db5b2'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'District Enrollment',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['14-15', '15-16', '16-17', '17-18', '18-19'],
      title: {
        text: 'School Year'
      }
    },
    yaxis: {
      title: {
        text: 'Enrollment'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
    };

    //Set it in the index.html
    var chart = new ApexCharts(document.querySelector("#line1"), options);
    chart.render();
  }); 

}

