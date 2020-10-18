
//Gender Bar Graph
function getGenderGraph(district_number, year) {
  d3.json("../data/gender").then(data => {

    var filteredData = data.filter(sy => sy.school_year == year);
    filteredData = filteredData.filter(n => n.number == district_number);

    
    var female_count = filteredData.map(s => s.female);
    var male_count = filteredData.map(m => m.male);
    var total_female = filteredData.map(tf  => tf.total_female);
    var total_male = filteredData.map(tf  => tf.total_male);
    var school_year = filteredData.map(sy => sy.school_year);
    
    //Discipline Percentages
    var discipline_total = (+female_count) + (+male_count)
    var total_female_percent = +female_count/discipline_total
    var total_male_percent = +male_count/discipline_total


    //District Percentages
    var district_total = (+total_female) + (+total_male)
    var district_female_percent = +total_female/district_total
    var district_male_percent = +total_male/district_total
      
 
    var trace1 = {
      x: ['Females', 'Males'],
      y: [district_female_percent, district_male_percent],
      name: 'Enrollment',
      type: 'bar',

      marker: {
        color: "#4C78A8",
        opacity: 0.6,
        line: {
          color: 'rgb(8,48)',
          width: 1.5
        }
      }
    };
    
    var trace2 = {
      x: ['Females', 'Males'],
      y: [total_female_percent, total_male_percent],
      name: 'Disciplinary Actions',
      type: 'bar',
      marker: {
        color: '#72B7B2',
        opacity: 0.6,
        line: {
          color: 'rgb(8,48)',
          width: 1.5
        }
      }
    };

 


    var data = [trace1, trace2];
    
    var layout = {
      barmode: 'group',
      yaxis: {tickformat: ",.0%", range: [0,1],title:"Percent"},
      font: {
        family: "Overpass",
        size: 18,
        color: "#7f7f7f"
      },
      plot_bgcolor:"rgb(179, 179, 179)",
      paper_bgcolor: '#eee'
    
    };
  
  Plotly.newPlot('bar', data, layout);
}); 
}

getGenderGraph(834, '18-19');

/*

//Ethnicity Bar Graphs
function getGenderGraph(district_number, year) {
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
    console.log(white_disctrict_count)
    
    //Variables for District Percentages
    var district_amer_indian_percent = +amer_indian_disctrict_count/+total_enrollment_disctrict_count;
    var district_hispanic_percent = +hispanic_disctrict_count/+total_enrollment_disctrict_count;
    var district_asian_pacific_islander_percent = +asian_pacific_islander_disctrict_count/+total_enrollment_disctrict_count;
    var district_black_percent = +black_disctrict_count/+total_enrollment_disctrict_count;
    var district_white_percent = +white_disctrict_count/+total_enrollment_disctrict_count;
    var district_multi_race_percent = +multi_race_disctrict_count/+total_enrollment_disctrict_count;
    console.log(district_white_percent)
     
  
    //Variables for Discupline Data Counts
    var amer_indian_discipline_count = filteredData.map(ai =>ai.amer_indian);
    var asian_pacific_islander_discipline_count = filteredData.map(api =>api.tasian_pacific_islander);
    var hispanic_discipline_count = filteredData.map(h =>h.hispanic);
    var black_discipline_count = filteredData.map(b =>b.tblack);
    var white_discipline_count = filteredData.map(w =>w.white);
    var multi_race_discipline_count = filteredData.map(mr =>mr.multi_race);
    
    //Variables for Discipline Percentages
    var discipline_total = (+amer_indian_discipline_count) + (+asian_pacific_islander_discipline_count)+ (+hispanic_discipline_count)+ (+black_discipline_count)+ (+white_discipline_count)+ (+multi_race_discipline_count);
    var disc_amer_indian_percent = +amer_indian_discipline_count/discipline_total;
    var disc_asian_pacific_islander_percent = +asian_pacific_islander_discipline_count/discipline_total;
    var disc_hispanic_percent = +hispanic_discipline_count/discipline_total;
    var disc_black_percent = +black_discipline_count/discipline_total;
    var disc_white_percent = +white_discipline_count/discipline_total;
    var disc_multi_race_percent = +multi_race_discipline_count/discipline_total;
   
        
 
    var trace1 = {
      x: ['American Indian', 'Asian Pacific Islander', 'Hispanic', 'Black', 'White', 'Multi-Race'],
      y: [district_amer_indian_percent, district_asian_pacific_islander_percent, district_hispanic_percent, district_black_percent, district_white_percent, district_multi_race_percent],
      name: 'Enrollment',
      type: 'bar',

      marker: {
        color: "#4C78A8",
        opacity: 0.6,
        line: {
          color: 'rgb(8,48)',
          width: 1.5
        }
      }
    };
    
    var trace2 = {
      x: ['American Indian', 'Asian Pacific Islander', 'Hispanic', 'Black', 'White', 'Multi-Race'],
      y: [disc_amer_indian_percent, disc_asian_pacific_islander_percent, disc_hispanic_percent, disc_black_percent, disc_white_percent, disc_multi_race_percent],
      name: 'Disciplinary Actions',
      type: 'bar',
      marker: {
        color: '#72B7B2',
        opacity: 0.6,
        line: {
          color: 'rgb(8,48)',
          width: 1.5
        }
      }
    };

 


    var data = [trace1, trace2];
    
    var layout = {
      barmode: 'group',
      yaxis: {tickformat: ",.0%", range: [0,1],title:"Percent"},
      font: {
        family: "Overpass",
        size: 18,
        color: "#7f7f7f"
      },
      plot_bgcolor:"rgb(179, 179, 179)",
      paper_bgcolor: '#eee'
    
    };
  
  Plotly.newPlot('bar', data, layout);
}); 
}

getGenderGraph(6, '18-19'); 



//Grade Bar Chart
function getGenderGraph(district_number, year) {
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
    var district_k_5_percent = +grade_k_5_district_count/+total_enrollment_disctrict_count;
    var district_6_8_percent = +grade_6_8_disctrict_count/+total_enrollment_disctrict_count;
    var district_9_12_percent = +grade_9_12_district_count/+total_enrollment_disctrict_count;
      
  
    //Variables for Discupline Data Counts
    var k_5_discipline_count = filteredData.map(ai =>ai.amer_indian);
    var d6_8_discipline_count = filteredData.map(api =>api.tasian_pacific_islander);
    var d9_12_discipline_count = filteredData.map(h =>h.hispanic);
       
    //Variables for Discipline Percentages
    var discipline_total = (+k_5_discipline_count) + (+d6_8_discipline_count)+ (+d9_12_discipline_count);
    var disc_k_5_percent = +k_5_discipline_count/discipline_total;
    var disc_6_8_percent = +d6_8_discipline_count/discipline_total;
    var disc_9_12_percent = +d9_12_discipline_count/discipline_total;    
 
    var trace1 = {
      x: ['K-5', '6-8', '9-12'],
      y: [district_k_5_percent, district_6_8_percent, district_9_12_percent],
      name: 'Enrollment',
      type: 'bar',

      marker: {
        color: "#4C78A8",
        opacity: 0.6,
        line: {
          color: 'rgb(8,48)',
          width: 1.5
        }
      }
    };
    
    var trace2 = {
      x: ['K-5', '6-8', '9-12'],
      y: [disc_k_5_percent, disc_6_8_percent, disc_9_12_percent],
      name: 'Disciplinary Actions',
      type: 'bar',
      marker: {
        color: '#72B7B2',
        opacity: 0.6,
        line: {
          color: 'rgb(8,48)',
          width: 1.5
        }
      }
    };

 


    var data = [trace1, trace2];
    
    var layout = {
      barmode: 'group',
      yaxis: {tickformat: ",.0%", range: [0,1],title:"Percent"},
      font: {
        family: "Overpass",
        size: 18,
        color: "#7f7f7f"
      },
      plot_bgcolor:"rgb(179, 179, 179)",
      paper_bgcolor: '#eee'
    
    };
  
  Plotly.newPlot('bar', data, layout);
}); 
}

getGenderGraph(6, '18-19'); 


//Incident Type Pie Chart

function getGenderGraph(district_number, year) {
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
  
  Plotly.newPlot('bar', data, layout);
}); 
}


getGenderGraph(6, '18-19'); 
*/