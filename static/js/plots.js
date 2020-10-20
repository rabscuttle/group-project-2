//Start off with district Minneapolis, school year 14-15
setGraphs(833, '14-15')

//Call all the functions for the graphs
function setGraphs(district, year) {

  getGenderGraph(district, year);
  getRaceGraph(district, year);
  getGradeGraph(district, year);
  getIncidentGraph(district, year);
  getDistrictInfo(district, year);
}

//District Info
function getDistrictInfo(district, year) {
  d3.json("../data/gender").then((data) => {
      
    var filteredData = data.filter(sy => sy.school_year == year);
    var filteredData = filteredData.filter(sy => sy.number == district);
    var name = filteredData.map(sy => sy.name);
    var number = filteredData.map(sy => sy.number);
    var total = filteredData.map(sy => sy.total_enrollment);
    name = name[0];
    number = number[0];
    total = total[0];

    //Get the district info panel on the index page and clear it out
    var districtinfo = d3.select("#districtinfo");
    districtinfo.html("");

    //Append 
    districtinfo.append("p").text("District Name: " + name);
    districtinfo.append("p").text("District Number: " + number);
    districtinfo.append("p").text("School Year: " + year);
    districtinfo.append("p").text("Total Enrollment: " + total.toLocaleString());
    // districtinfo.append("p").text("District Total Incidents: " + 0);
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
      categories: ['Male', 'Female'],
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
      data: [disc_amer_indian_percent, disc_asian_pacific_islander_percent, disc_hispanic_percent, disc_black_percent, disc_white_percent, disc_multi_race_percent]
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
      categories: ['American Indian', 'Asian Pacific Islander', 'Hispanic', 'Black', 'White', 'Multi-Race'],
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
    colors: ['#7790ad', '#8db5b2']
    };

    var chart = new ApexCharts(document.querySelector("#bar2"), options);
    chart.render();
  }); 
}
        

//Grade Bar Chart
function getGradeGraph(district_number, year) {
  d3.json("../data/race").then(data => {
    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);
    
    //Variable for School Year
     var school_year = filteredData.map(sy => sy.school_year);
    //Variables for District Data Counts
    var grade_k_5_district_count = filteredData.map(tai =>tai.total_amer_indian);
    var grade_6_8_disctrict_count = filteredData.map(tapi =>tapi.total_asian_pacific_islander);
    var grade_9_12_district_count = filteredData.map(th =>th.total_hispanic);
    var total_enrollment_disctrict_count = filteredData.map(te =>te.total_enrollment);
        
    //Variables for District Percentages
    var district_k_5_percent = (+grade_k_5_district_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_6_8_percent = (+grade_6_8_disctrict_count/+total_enrollment_disctrict_count * 100).toFixed(2);
    var district_9_12_percent = (+grade_9_12_district_count/+total_enrollment_disctrict_count * 100).toFixed(2);
      
  
    //Variables for Discupline Data Counts
    var k_5_discipline_count = filteredData.map(ai =>ai.amer_indian);
    var d6_8_discipline_count = filteredData.map(api =>api.tasian_pacific_islander);
    var d9_12_discipline_count = filteredData.map(h =>h.hispanic);
       
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
    
    //Variable for School Year
    // var school_year = filteredData.map(sy => sy.school_year);
     filteredData.map(tai =>tai.total_amer_indian);
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
            x: 'Illegal_drugs',
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
      height: 350,
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
              to: 300,
              color: '#7790ad'
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

    
/*
// Bar Chart of Incidents
function getIncidentGraph(district_number, year) {
  d3.json("../data/incident").then(data => {
    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);
    
    //Variable for School Year
    // var school_year = filteredData.map(sy => sy.school_year);
     filteredData.map(tai =>tai.total_amer_indian);
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
      series: [{
      data: [+alcohol_count, +arson_count, +assault_count, +attendance_count, +bomb_count, +bomb_threat_count, +bullying_count, +computer, +controlled_substances, +cyber_bullying,  +disruptive_disorderly, +fighting, +gang_activity, +harassment, +hazing, +homicide, +extortion, +illegal_drugs, +other, +over_the_counter_meds, +pyrotechnics, +robbery_using_force, +terroristic_threats, +theft, +threat_intimidation, +tobacco, +vandalism, +verbal_abuse, +weapon],
    }],
      chart: {
      type: 'bar',
      height: 600
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
       dataLabels: {
          position: 'bottom'
        },
      }
    },
    colors: ['#7790ad'],
  
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['black']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      offsetX: 0,
      dropShadow: {
        enabled: false
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Alcohol', 'Arson', 'Assault', 'Attendance', 'Bomb', 'Bomb Threat', 'Bullying', 'Computer', 'Controlled Substances', 'Cyber Bullying', 'Disruptive Disorderly','Extortion', 'Fighting', 'Gang Activity', 'Harassment', 'Hazing', 'Homicide', 'Illegal Drugs', 'Other', 'OCT Meds', 'Pyrotechnics', 'Robbery Using Force', 'Terroristic Threats', 'Theft', 'Threat Intimidation', 'Tobacco', 'Vandalism', 'Verbal Abuse', 'Weapon'],
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    title: {
        text: 'Incident Type',
        align: 'center',
        floating: true
    },

    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    },
    legend: {
      show: false
    }
    };



    var chart = new ApexCharts(document.querySelector("#pie1"), options);
    chart.render();
  }); 
}*/
/*
  //Radial Chart
    var options = {
      series: [+alcohol_count, +arson_count, +assault_count, +attendance_count, +bomb_count, +bomb_threat_count, +bullying_count, +computer, +controlled_substances, +cyber_bullying,  +disruptive_disorderly, +fighting, +gang_activity, +harassment, +hazing, +homicide, +extortion, +illegal_drugs, +other, +over_the_counter_meds, +pyrotechnics, +robbery_using_force, +terroristic_threats, +theft, +threat_intimidation, +tobacco, +vandalism, +verbal_abuse, +weapon],
      chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              
            }
          }
        }
      }
    },
    labels: ['alcohol', 'arson', 'assault', 'attendance', 'bomb', 'bomb_threat', 'bullying', 'computer', 'controlled_substances', 'cyber_bullying', 'disruptive_disorderly','extortion', 'fighting', 'gang_activity', 'harassment', 'hazing', 'homicide', 'illegal_drugs', 'other', 'over_the_counter_meds', 'pyrotechnics', 'robbery_using_force', 'terroristic_threats', 'theft', 'threat_intimidation', 'tobacco', 'vandalism', 'verbal_abuse', 'weapon'],
    };

    var chart = new ApexCharts(document.querySelector("#pie1"), options);'Assault', 'Attendance', 'Bomb', 'Bomb Threat', 'Bullying', 'Computer', 'Controlled_substances', 'Cyber Bullying', 'Disruptive Disorderly','Extortion', 'Fighting', 'Gang Activity', 'Harassment', 'Hazing', 'Homicide', 'Illegal Drugs', 'Other', 'OTC Meds', 'Pyrotechnics', 'Robbery Using Force', 'Terroristic Threats', 'Theft', 'Threat Intimidation', 'Tobacco', 'Vandalism', 'Verbal Abuse', 'Weapon'],
    chart.render();
  }); 
}
    
    
    
    //Pie Chart
    
    var data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }];
    var ultimateColors = [
      ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)', 'rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)', 'rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)', 'rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
    ];
    var data = [{
      values: [+alcohol_count, +arson_count, +assault_count, +attendance_count, +bomb_count, +bomb_threat_count, +bullying_count, +computer, +controlled_substances, +cyber_bullying,  +disruptive_disorderly, +fighting, +gang_activity, +harassment, +hazing, +homicide, +extortion, +illegal_drugs, +other, +over_the_counter_meds, +pyrotechnics, +robbery_using_force, +terroristic_threats, +theft, +threat_intimidation, +tobacco, +vandalism, +verbal_abuse, +weapon],
      labels: ['alcohol', 'arson', 'assault', 'attendance', 'bomb', 'bomb_threat', 'bullying', 'computer', 'controlled_substances', 'cyber_bullying', 'disruptive_disorderly','extortion', 'fighting', 'gang_activity', 'harassment', 'hazing', 'homicide', 'illegal_drugs', 'other', 'over_the_counter_meds', 'pyrotechnics', 'robbery_using_force', 'terroristic_threats', 'theft', 'threat_intimidation', 'tobacco', 'vandalism', 'verbal_abuse', 'weapon'],
      type: 'pie',
        marker: {
        colors: ultimateColors[0]
        },
    }];
    
    var layout = {
     height: 400,
      width: 500
    
    };
  
    Plotly.newPlot('pie1', data, layout);
  }); 
}
*/
