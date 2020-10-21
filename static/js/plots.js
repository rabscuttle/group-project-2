//Start off with district Minneapolis, school year 14-15
setGraphs(1, '18-19')

//Call all the functions for the graphs
function setGraphs(district, year) {

  getGenderGraph(district, year);
  getRaceGraph(district, year);
  getGradeGraph(district, year);
  getIncidentGraph(district, year);
  getDistrictInfo(district, year);
  getLineGraph(district);
}

//District Info
function getDistrictInfo(district, year) {
  d3.json("../data/incident").then((data) => {
      
    var filteredData = data.filter(sy => sy.school_year == year);
    var filteredData = filteredData.filter(sy => sy.number == district);
    var name = filteredData.map(sy => sy.name);
    var number = filteredData.map(sy => sy.number);
    var total = filteredData.map(sy => sy.total_enrollment);
    var total_incident = filteredData.map(sy => sy.total_incident);
    name = name[0];
    number = number[0];
    total = total[0];
    total_incident = total_incident[0];

    //Get the district info panel on the index page and clear it out
    var districtinfo = d3.select("#districtinfo");
    districtinfo.html("");

    //Append 
    districtinfo.append("p").text("District Name: " + name);
    districtinfo.append("p").text("District Number: " + number);
    districtinfo.append("p").text("School Year: " + year);
    districtinfo.append("p").text("Total Enrollment: " + total.toLocaleString());
    districtinfo.append("p").text("District Total Incidents: " + total_incident.toLocaleString());
  });
}

//Gender Bar Graph
function getGenderGraph(district_number, year) {
  d3.json("../data/gender").then(data => {

    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);

    var female_count = filteredData.map(s => s.female);
    var male_count = filteredData.map(m => m.male);
    var total_female = filteredData.map(tf  => tf.total_female);
    var total_male = filteredData.map(tf  => tf.total_male);

    

    //Discipline Percentages
    var discipline_total = (+female_count) + (+male_count)
    var total_female_percent = (+female_count/discipline_total * 100).toFixed(2)
    var total_male_percent = (+male_count/discipline_total * 100).toFixed(2)

    //District Percentages
    var district_total = (+total_female) + (+total_male)
    var district_female_percent = (+total_female/district_total *100).toFixed(2)
    var district_male_percent = (+total_male/district_total * 100).toFixed(2)

 
    var options = {
      series: [{
      name: 'Enrollment',
      data: [district_female_percent, district_male_percent]
    }, {
      name: 'Disciplinary Actions',
      data: [total_female_percent, total_male_percent]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Female', 'Male'],
    },
    yaxis: {
      title: {
        text: 'Percent'
      },
      labels: {
        formatter: function (value) {
          return value + "%";
        }
      },
      min: 0,
      max: 100,
    },
    fill: {
      opacity: 1
    },
    title: {
      text: 'Gender'
    },
    colors: ['#7790ad', '#8db5b2']
    };

    var chart = new ApexCharts(document.querySelector("#bar1"), options);
    chart.render();
  }); 
}

//Ethnicity Bar Graphs
function getRaceGraph(district_number, year) {
  d3.json("../data/race").then(data => {
    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);
    
    //Variable for School Year
     var school_year = filteredData.map(sy => sy.school_year);
    //Variables for District Data Counts

    var amer_indian_disctrict_count = filteredData.map(tai =>tai.total_amer_indian);
    var asian_pacific_islander_disctrict_count = filteredData.map(tapi =>tapi.total_asian_pacific_islander);
    var hispanic_disctrict_count = filteredData.map(th =>th.total_hispanic);
    var black_disctrict_count = filteredData.map(tb =>tb.total_black);
    var white_disctrict_count = filteredData.map(tw =>tw.total_white);
    var multi_race_disctrict_count = filteredData.map(tmr =>tmr.total_multi_race);
    var total_enrollment_disctrict_count = filteredData.map(te =>te.total_enrollment);
    
    //Variables for District Percentages
    var district_amer_indian_percent = (+amer_indian_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_hispanic_percent = (+hispanic_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_asian_pacific_islander_percent = (+asian_pacific_islander_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_black_percent = (+black_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_white_percent = (+white_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_multi_race_percent = (+multi_race_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    
    //Variables for Discupline Data Counts
    var amer_indian_discipline_count = filteredData.map(ai =>ai.amer_indian);
    var asian_pacific_islander_discipline_count = filteredData.map(api =>api.tasian_pacific_islander);
    var hispanic_discipline_count = filteredData.map(h =>h.hispanic);
    var black_discipline_count = filteredData.map(b =>b.tblack);
    var white_discipline_count = filteredData.map(w =>w.white);
    var multi_race_discipline_count = filteredData.map(mr =>mr.multi_race);
    
    //Variables for Discipline Percentages
    var discipline_total = (+amer_indian_discipline_count) + (+asian_pacific_islander_discipline_count)+ (+hispanic_discipline_count)+ (+black_discipline_count)+ (+white_discipline_count)+ (+multi_race_discipline_count);
    var disc_amer_indian_percent = (+amer_indian_discipline_count/discipline_total * 100).toFixed(2);
    var disc_asian_pacific_islander_percent = (+asian_pacific_islander_discipline_count/discipline_total * 100).toFixed(2);
    var disc_hispanic_percent = (+hispanic_discipline_count/discipline_total * 100).toFixed(2);
    var disc_black_percent = (+black_discipline_count/discipline_total * 100).toFixed(2);
    var disc_white_percent = (+white_discipline_count/discipline_total * 100).toFixed(2);
    var disc_multi_race_percent = (+multi_race_discipline_count/discipline_total * 100).toFixed(2);
   
    var options = {
      series: [{
      name: 'Enrollment',
      data: [district_amer_indian_percent, district_asian_pacific_islander_percent, district_hispanic_percent, district_black_percent, district_white_percent, district_multi_race_percent]
    }, {
      name: 'Disciplinary Actions',
      data: [disc_amer_indian_percent, disc_black_percent, disc_hispanic_percent, disc_multi_race_percent, disc_white_percent, disc_asian_pacific_islander_percent,]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Amer Ind', 'Black', 'Hispanic',  'Multi', 'White', 'Asian Pac Islnd'],
      labels: {
        rotate: 0
      }
    },
    yaxis: {
      title: {
        text: 'Percent'
      },
      labels: {
        formatter: function (value) {
          return value + "%";
          
        }

      },
      min: 0,
      max: 100,
    },
    fill: {
      opacity: 1
    },
    title: {
      text: 'Race'
    },
    colors: ['#7790ad', '#8db5b2']
    };

    var chart = new ApexCharts(document.querySelector("#bar2"), options);
    chart.render();
  }); 
}
        

//Grade Bar Chart
function getGradeGraph(district_number, year) {
  d3.json("../data/grade").then(data => {
    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);
    
    //Variable for School Year
     var school_year = filteredData.map(sy => sy.school_year);
    //Variables for District Data Counts
    var grade_k_5_district_count = filteredData.map(k =>k.total_grade_k_5);
    var grade_6_8_disctrict_count = filteredData.map(six =>six.total_grade_6_8);
    var grade_9_12_district_count = filteredData.map(nine =>nine.total_grade_9_12);
    var total_enrollment_disctrict_count = filteredData.map(te =>te.total_enrollment);
       
    //Variables for District Percentages
    var district_k_5_percent = (+grade_k_5_district_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_6_8_percent = (+grade_6_8_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_9_12_percent = (+grade_9_12_district_count/+total_enrollment_disctrict_count * 100).toFixed(2);
  
    //Variables for Discupline Data Counts
    var k_5_discipline_count = filteredData.map(ai =>ai.grade_k_5);
    var d6_8_discipline_count = filteredData.map(api =>api.grade_6_8);
    var d9_12_discipline_count = filteredData.map(h =>h.grade_9_12);
       
    //Variables for Discipline Percentages
    var discipline_total = (+k_5_discipline_count) + (+d6_8_discipline_count)+ (+d9_12_discipline_count);
    var disc_k_5_percent = (+k_5_discipline_count/discipline_total * 100).toFixed(2);
    var disc_6_8_percent = (+d6_8_discipline_count/discipline_total * 100).toFixed(2);
    var disc_9_12_percent = (+d9_12_discipline_count/discipline_total * 100).toFixed(2);    

    var options = {
      series: [{
      name: 'Enrollment',
      data: [district_k_5_percent, district_6_8_percent, district_9_12_percent]
    }, {
      name: 'Disciplinary Actions',
      data: [disc_k_5_percent, disc_6_8_percent, disc_9_12_percent]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['K-5', '6-8', '9-12'],
    },
    yaxis: {
      title: {
        text: 'Percent'
      },
      labels: {
        formatter: function (value) {
          return value + "%";
        }
 
      },
      min: 0,
      max: 100,
    },
    fill: {
      opacity: 1
    },
    title: {
      text: 'Grade'
    },
    colors: ['#7790ad', '#8db5b2']
    };

    var chart = new ApexCharts(document.querySelector("#bar3"), options);
    chart.render();
  }); 
}

//Incident Type Radial Chart
function getIncidentGraph(district_number, year) {
  d3.json("../data/incident").then(data => {
    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);
    
    //Variables for Incident Counts
    var alcohol_count = filteredData.map(a =>a.alcohol);
    var arson_count = filteredData.map(ar =>ar.arson);
    var assault_count = filteredData.map(as =>as.assault);
    var attendance_count = filteredData.map(at =>at.attendance);
    var bomb_count = filteredData.map(b =>b.bomb);
    var bomb_threat_count = filteredData.map(bt =>bt.bomb_threat);
    var bullying_count = filteredData.map(bu =>bu.bullying);
    var computer= filteredData.map(c =>c.computer);
    var controlled_substances= filteredData.map(cs =>cs.controlled_substances);
    var cyber_bullying= filteredData.map(cb =>cb.cyber_bullying);
    var disruptive_disorderly= filteredData.map(dd =>dd.disruptive_disorderly);
    var fighting = filteredData.map(f =>f.fighting);
    var gang_activity = filteredData.map(g =>g.gang_activity);
    var harassment= filteredData.map(h =>h.harassment);
    var hazing= filteredData.map(hz =>hz.hazing);
    var homicide= filteredData.map(ho =>ho.homicide);
    var extortion= filteredData.map(e =>e.extortion);
    var illegal_drugs= filteredData.map(i =>i.illegal_drugs);
    var other= filteredData.map(o =>o.other);
    var over_the_counter_meds= filteredData.map(otcm =>otcm.over_the_counter_meds);
    var pyrotechnics= filteredData.map(p =>p.pyrotechnics);
    var robbery_using_force= filteredData.map(r =>r.robbery_using_force);
    var terroristic_threats= filteredData.map(tt =>tt.terroristic_threats);
    var theft= filteredData.map(t =>t.theft);
    var threat_intimidation= filteredData.map(ti =>ti.threat_intimidation);
    var tobacco= filteredData.map(to =>to.tobacco);
    var vandalism= filteredData.map(v =>v.vandalism);
    var verbal_abuse= filteredData.map(va =>va.verbal_abuse);
    var weapon= filteredData.map(w =>w.weapon);
    

    var options = {
      series: [
      {
        data: [
          {
            x: 'Alcohol', 
            y: +alcohol_count,
          },
          {
            x: 'Arson',
            y:  +arson_count, 
          },
          {
            x: 'Assault', 
            y: +assault_count, 
          },
          {
            x: 'Attendance', 
            y: +attendance_count, 
          },
          {
            x: 'Bomb',
            y: +bomb_count, 
          },
          {
            x:  'Bomb Threat', 
            y: +bomb_threat_count,
          },
          {
            x: 'Bullying',
            y:  +bullying_count, 
          },
          {
            x:  'Computer', 
            y: +computer, 
          },
          {
            x: 'Controlled Substances', 
            y: +controlled_substances,
          },
          {
            x: 'Cyber Bullying',
            y:  +cyber_bullying, 
          },
          {
            x:  'Disruptive Disorderly',
            y:  +disruptive_disorderly,
          },
          {
            x: 'Extortion', 
            y:  +extortion, 
          },
          {
            x: 'Fighting',
            y: +fighting,
          },
          {
            x: 'Gang Activity', 
            y: +gang_activity, 
          },
          {
            x: 'Harassment',
            y: +harassment, 
          },
          {
            x: 'Hazing',
            y: +hazing, 
          },
          {
            x: 'Homicide', 
            y: +homicide,
          },
          {
            x: 'Illegal Drugs',
            y:  +illegal_drugs, 
          },
          {
            x: 'Other',
            y: +other, 
          },
          {
            x: 'OCT Meds',
            y: +over_the_counter_meds, 
          },
          {
            x: 'Pyrotechnics',
            y: +pyrotechnics, 
          },
          {
            x: 'Robbery Using Force',
            y: +robbery_using_force, 
          },
          {
            x: 'Terroristic Threats',
            y: +terroristic_threats, 
          },          
          {
            x: 'Theft',
            y: +theft, 
          },          
          {
            x: 'Threat Intimidation',
            y: +threat_intimidation, 
          },          
          {
            x: 'Tobacco',
            y: +tobacco, 
          },          
          {
            x: 'Vandalism',
            y: +vandalism, 
          },
          {
            x: 'Verbal Abuse',
            y: +verbal_abuse,
          },
          {
            x: 'Weapon',
            y:  +weapon,
          },

        ]
      }
    ],
      legend: {
      show: false
    },
    chart: {
      height: 400,
      type: 'treemap'
    },
    title: {
      text: 'Incident Type'
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      formatter: function(text, op) {
        return [text, op.value]
      },
      offsetY: -4
    },

    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 200,
              color: '#0f1f3d'
            },
            
          ]
        }
      }
    }
  }; 
    var chart = new ApexCharts(document.querySelector("#pie1"), options);
    chart.render();
  }); 
}

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
      height: 400,
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
      text: 'District Enrollment/Incident Trends for all School Years',
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
