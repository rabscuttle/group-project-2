select district.id, district.name, district.number, district.type,  district.total_enrollment_14_15, 
	district.female_14_15, district.male_14_15, district.amer_indian_14_15, district.asian_pacific_islander_14_15, 
	district.hispanic_14_15, district.black_14_15, district.white_14_15, district.multi_race_14_15, 
	district.grade_k_5_14_15, district.grade_6_8_14_15, district.grade_9_12_14_15, district.total_enrollment_15_16, 
	district.female_15_16, district.male_15_16, district.amer_indian_15_16, district.asian_pacific_islander_15_16, 
	district.hispanic_15_16, district.black_15_16, district.white_15_16, district.multi_race_15_16, 
	district.grade_k_5_15_16, district.grade_6_8_15_16, district.grade_9_12_15_16, district.total_enrollment_16_17, 
	district.female_16_17, district.male_16_17, district.amer_india_16_17, district.asian_pacific_islander_16_17, 
	district.hispanic_16_17, district.black_16_17, district.white_16_17, district.multi_race_16_17, district.grade_k_5_16_17, 
	district.grade_6_8_16_17, district.grade_9_12_16_17, district.total_enrollment_17_18, district.female_17_18, 
	district.male_17_18, district.amer_indian_17_18, district.asian_pacific_islander_17_18, district.hispanic_17_18, 
	district.black_17_18, district.white_17_18, district.multi_race_17_18, district.grade_k_5_17_18, 
	district.grade_6_8_17_18, district.grade_9_12_17_18, district.total_enrollment_18_19, district.female_18_19, 
	district.male_18_19, district.amer_indian_18_19, district.asian_pacific_islander_18_19, district.hispanic_18_19, 
	district.black_18_19, district.white_18_19, district.multi_race_18_19, district.grade_k_5_18_19, 
	district.grade_6_9_18_19, district.grade_9_12_18_19, incident_by_gender.school_year, 
	incident_by_gender.female, incident_by_gender.male, incident_by_grade.grade_k_5, incident_by_grade.grade_6_8, 
	incident_by_grade.grade_9_12, incident_by_race.amer_indian, incident_by_race.asian_pacific_islander, 
	incident_by_race.black, incident_by_race.hispanic, incident_by_race.white, incident_by_race.multi_race, 
	incident.alcohol, incident.arson, incident.assault, incident.attendance, incident.bomb, incident.bomb_threat, 
	incident.bullying, incident.computer, incident.controlled_substances, incident.cyber_bullying, 
	incident.disruptive_disorderly, incident.extortion, incident.fighting, incident.gang_activity, 
	incident.harassment, incident.hazing, incident.homicide, incident.illegal_drugs, incident.over_the_counter_meds, 
	incident.pyrotechnics, incident.robbery_using_force, incident.terroristic_threats, incident.theft, 
	incident.threat_intimidation, incident.tobacco, incident.vandalism, incident.verbal_abuse, incident.weapon, 
	incident.other
from incident
join district ON district.id = incident.district_id
left outer join incident_by_grade ON incident_by_grade.district_id = incident.district_id and 
	incident_by_grade.school_year = incident.school_year
left outer join incident_by_race ON incident_by_race.district_id = incident.district_id and 
	incident_by_race.school_year = incident.school_year
left outer join incident_by_gender ON incident_by_gender.district_id = incident.district_id and 
	incident_by_gender.school_year = incident.school_year


