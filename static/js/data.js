function create_data(data, columns) {
	var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// Append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(columns).enter()
	  .append('th')
	    .text(function (column) { return column; });

	// Create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// Create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// Render the table(s)
d3.json("../data/gender").then((data) => {
	create_table(data, ['name', 'school_year', 'total_enrollment', 'total_female', 'total_male']);
})

d3.json("../data/incident").then((data) => {
	create_table(data, ['name', 'school_year', 'alcohol', 'arson', 'assault', 'attendance', 'bomb', 'bomb_threat', 'bullying', 'computer', 'controlled_substances', 'cyber_bullying', 'disruptive_disorderly', 'extortion', 'fighting', 'gang_activity', 'harassment', 'hazing', 'homicide', 'illegal_drugs', 'other', 'over_the_counter_meds', 'pyrotechnics', 'robbery_using_force', 'terroristic_threats', 'theft', 'threat_intimidation', 'tobacco', 'vandalism', 'verbal_abuse', 'weapon']);
})

d3.json("../data/grade").then((data) => {
	create_table(data, ['name', 'school_year', 'grade_6_8', 'grade_9_12', 'grade_k_5', 'total_enrollment', 'total_grade_6_8', 'total_grade_9_12', 'total_grade_k_5']);
})

d3.json("../data/race").then((data) => {
	create_table(data, ['name', 'school_year', 'amer_indian', 'hispanic', 'multi_race', 'tasian_pacific_islander', 'tblack', 'white', 'total_amer_indian', 'total_asian_pacific_islander', 'total_black', 'total_enrollment', 'total_hispanic', 'total_multi_race', 'total_white']);
})