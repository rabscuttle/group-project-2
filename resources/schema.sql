-- SQL to create the MNDistrictData tables.  Make sure to create the MNDistrictData first! --

-- Create the district table
CREATE TABLE district (
	id SERIAL PRIMARY KEY,
	name VARCHAR,
	county INTEGER,
	number INTEGER,
	type INTEGER
);

-- Create district total table
CREATE TABLE district_total (
	id SERIAL PRIMARY KEY,
	district_id INTEGER,
	school_year VARCHAR,
	total_enrollment INTEGER,
	total_female INTEGER,
	total_male INTEGER,
	total_amer_indian INTEGER,
	total_asian_pacific_islander INTEGER,
	total_hispanic INTEGER,
	total_black INTEGER,
	total_white INTEGER,
	total_multi_race INTEGER,
	total_grade_k_5 INTEGER,
	total_grade_6_8 INTEGER,
	total_grade_9_12 INTEGER,
	FOREIGN KEY (district_id) REFERENCES district(id)
);

-- Create the incident table
CREATE TABLE incident (
	id SERIAL PRIMARY KEY,
	district_id INTEGER,
	school_year VARCHAR,
	alcohol INTEGER,
	arson INTEGER,
	assault INTEGER,
	attendance INTEGER,
	bomb INTEGER,
	bomb_threat INTEGER,
	bullying INTEGER,
	computer INTEGER,
	controlled_substances INTEGER,
	cyber_bullying INTEGER,
	disruptive_disorderly INTEGER,
	extortion INTEGER,
	fighting INTEGER,
	gang_activity INTEGER,
	harassment INTEGER,
	hazing INTEGER,
	homicide INTEGER,
	illegal_drugs INTEGER,
	over_the_counter_meds INTEGER,
	pyrotechnics INTEGER,
	robbery_using_force INTEGER,
	terroristic_threats INTEGER,
	theft INTEGER,
	threat_intimidation INTEGER,
	tobacco INTEGER,
	vandalism INTEGER,
	verbal_abuse INTEGER,
	weapon INTEGER,
	other INTEGER,
	FOREIGN KEY (district_id) REFERENCES district(id)
);

--  Create the incident by gender table
CREATE TABLE incident_by_gender (
	id SERIAL PRIMARY KEY,
	district_id INTEGER,
	school_year VARCHAR,
	female INTEGER,
	male INTEGER,
	FOREIGN KEY (district_id) REFERENCES district(id)
);

-- Create the incident by grade table
CREATE TABLE incident_by_grade (
	id SERIAL PRIMARY KEY,
	district_id INTEGER,
	school_year VARCHAR,
	grade_k_5 INTEGER,
	grade_6_8 INTEGER,
	grade_9_12 INTEGER,
	FOREIGN KEY (district_id) REFERENCES district(id)
);

-- Create the incident by race table
CREATE TABLE incident_by_race (
	id SERIAL PRIMARY KEY,
	district_id INTEGER,
	school_year VARCHAR,
	amer_indian INTEGER,
	asian_pacific_islander INTEGER,
	black INTEGER,
	hispanic INTEGER,
	white INTEGER,
	multi_race INTEGER,
	FOREIGN KEY (district_id) REFERENCES district(id)
);