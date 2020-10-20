getLineGraph(1);

function getLineGraph(district) {

  d3.json("../data/gender").then((data) => {
      
    var filteredData = data.filter(sy => sy.number == district);
    var total = filteredData.map(sy => sy.total_enrollment);

    var test = [12000, 11000, 14000, 18000, 17000];

    var options = {
      series: [
      {
        name: "Enrollment",
        data: total
      },
      {
        name: "Not Enrollment",
        data: test
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

    var chart = new ApexCharts(document.querySelector("#line1"), options);
    chart.render();
  }); 

}

