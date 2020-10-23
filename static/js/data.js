d3.json("../data/incident").then((data) => {
	create_table(data, ['name', 'school_year', 'number', 'total_enrollment', 'total_incident'],['Name', 'School Year', 'Number', 'Total Enrollment', 'Total Incident']);
})

function create_table(data, columns, headers) {

	d3.select("table").html("");
	var table = d3.select('table').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// Append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(headers).enter()
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

function getData(type) {

	if (type == 1) {
		d3.json("../data/incident").then((data) => {
			create_table(data, ['name', 'school_year', 'number', 'total_enrollment', 'total_incident'],
			['Name', 'School Year', 'Number', 'Total Enrollment', 'Total Incident']);
		})
	} else if (type == 2) {

		d3.json("../data/incident").then((data) => {
			create_table(data, ['name', 'school_year', 'alcohol', 'arson', 'assault', 'attendance', 'bomb', 'bomb_threat', 'bullying', 'computer', 'controlled_substances', 'cyber_bullying', 'disruptive_disorderly', 'extortion', 'fighting', 'gang_activity', 'harassment', 'hazing', 'homicide', 'illegal_drugs', 'other', 'over_the_counter_meds', 'pyrotechnics', 'robbery_using_force', 'terroristic_threats', 'theft', 'threat_intimidation', 'tobacco', 'vandalism', 'verbal_abuse', 'weapon'],
			['Name', 'School Year', 'Alcohol', 'Arson', 'Assault', 'Attendance', 'Bomb', 'Bomb Threat', 'Bullying', 'Computer', 'Controlled Substances', 'Cyber Bullying', 'Disruptive Disorderly', 'Extortion', 'Fighting', 'Gang Activity', 'Harassment', 'Hazing', 'Homicide', 'Illegal Drugs', 'Other', 'Over the Counter Meds', 'Pyrotechnics', 'Robbery Using Force', 'Terroristic Threats', 'Theft', 'Threat Intimidation', 'Tobacco', 'Vandalism', 'Verbal Abuse', 'Weapon']);
		})
	
	} else if (type == 3) {
		d3.json("../data/gender").then((data) => {
			create_table(data, ['name', 'school_year', 'total_enrollment', 'total_female', 'total_male'],
			['Name', 'School Year', 'Total Enrollment', 'Total Female Incidents', 'Total Male Incidents']);
		})
	
	} else if (type == 4) {
		d3.json("../data/grade").then((data) => {
			create_table(data, ['name', 'school_year', 'grade_6_8', 'grade_9_12', 'grade_k_5'],
			['Name', 'School Year', 'Grade 6-8', 'Grade 9-12', 'Grade 9-12']);
		})
	
	} else if (type == 5) {
		d3.json("../data/race").then((data) => {
			create_table(data, ['name', 'school_year', 'amer_indian', 'hispanic', 'multi_race', 'tasian_pacific_islander', 'tblack', 'white'],
			['Name', 'School Year', 'American Indian', 'Hispanic', 'Multi Race', 'Asian Pacific Islander', 'Black', 'White']);
		})
	}	
}