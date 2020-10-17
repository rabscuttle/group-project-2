##########
# Import #
##########
import numpy as np

import sqlalchemy
from config import username, password
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, render_template, redirect, jsonify

##################
# Database Setup #
##################

database_name = 'MNDistrictData'
connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'

# Connect to the database
engine = create_engine(connection_string)
base = automap_base()
base.prepare(engine, reflect=True)

# Select the tables
district = base.classes.district
district_total = base.classes.district_total
incident = base.classes.incident
incident_by_gender = base.classes.incident_by_gender
incident_by_grade = base.classes.incident_by_grade
incident_by_race = base.classes.incident_by_race

###############
# Flask Setup #
###############

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 # Effectively disables page caching

################
# Flask Routes #
################

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data/incident")
def data_incident():
    
    # Query the database
    session = Session(engine)

    results = (session.query(district.id, district.name, district_total.school_year, \
        incident.alcohol, incident.arson, incident.assault, incident.attendance, incident.bomb, incident.bomb_threat, \
        incident.bullying, incident.computer, incident.controlled_substances, incident.cyber_bullying, \
        incident.disruptive_disorderly, incident.extortion, incident.fighting, incident.gang_activity, \
        incident.harassment, incident.hazing, incident.homicide, incident.illegal_drugs, incident.over_the_counter_meds, \
        incident.pyrotechnics, incident.robbery_using_force, incident.terroristic_threats, incident.theft, \
        incident.threat_intimidation, incident.tobacco, incident.vandalism, incident.verbal_abuse, incident.weapon, \
        incident.other)
        .filter(district.id == district_total.district_id)
        .filter(incident.district_id == district_total.district_id)
        .filter(incident.school_year == district_total.school_year)
        .all())
    
    all_info = []
    for id, name, school_year, alcohol, arson, assault, attendance, bomb, bomb_threat, bullying, computer, controlled_substances, cyber_bullying, disruptive_disorderly, extortion, fighting, gang_activity, harassment, hazing, homicide, illegal_drugs, over_the_counter_meds, pyrotechnics, robbery_using_force, terroristic_threats, theft, threat_intimidation, tobacco, vandalism, verbal_abuse, weapon, other in results:
        district_dict = {}
        district_dict["name"] = name 
        district_dict["id"] = id
        district_dict["school_year"] = school_year 
        district_dict["alcohol"] = alcohol
        district_dict["arson"] = arson
        district_dict["assault"] = assault
        district_dict["attendance"] = attendance
        district_dict["bomb"] = bomb
        district_dict["bomb_threat"] = bomb_threat 
        district_dict["bullying"] = bullying
        district_dict["computer"] = computer 
        district_dict["controlled_substances"] = controlled_substances
        district_dict["cyber_bullying"] = cyber_bullying
        district_dict["disruptive_disorderly"] = disruptive_disorderly
        district_dict["extortion"] = extortion
        district_dict["fighting"] = fighting
        district_dict["gang_activity"] = gang_activity 
        district_dict["harassment"] = harassment
        district_dict["hazing"] = hazing 
        district_dict["homicide"] = homicide
        district_dict["illegal_drugs"] = illegal_drugs
        district_dict["over_the_counter_meds"] = over_the_counter_meds
        district_dict["pyrotechnics"] = pyrotechnics
        district_dict["robbery_using_force"] = robbery_using_force
        district_dict["terroristic_threats"] = terroristic_threats 
        district_dict["theft"] = theft
        district_dict["threat_intimidation"] = threat_intimidation 
        district_dict["tobacco"] = tobacco
        district_dict["vandalism"] = vandalism
        district_dict["verbal_abuse"] = verbal_abuse
        district_dict["weapon"] = weapon
        district_dict["other"] = other

        all_info.append(district_dict) 
   

    return jsonify(all_info)
 
@app.route("/data/gender")
def data_gender():
    
    # Query the database
    session = Session(engine)

    results = (session.query(district.id, district.name, district_total.school_year, district_total.total_enrollment, \
        district_total.total_female, district_total.total_male, incident_by_gender.female, incident_by_gender.male)
        .filter(district.id == district_total.district_id)
        .filter(incident_by_gender.district_id == district_total.district_id)
        .filter(incident_by_gender.school_year == district_total.school_year)
        .all())
    
    all_info = []
    for id, name, school_year, total_enrollment, total_female, total_male, female, male  in results:
        district_dict = {}
        district_dict["name"] = name 
        district_dict["id"] = id
        district_dict["school_year"] = school_year 
        district_dict["total_enrollment"] = total_enrollment
        district_dict["female"] = female
        district_dict["male"] = male
        district_dict["total_female"] = total_female
        district_dict["total_male"] = total_male

        all_info.append(district_dict) 
   

    return jsonify(all_info)

@app.route("/data/grade")
def data_grade():
    
    # Query the database
    session = Session(engine)

    results = (session.query(district.id, district.name, district_total.school_year, district_total.total_enrollment, \
        district_total.total_grade_k_5, district_total.total_grade_6_8, district_total.total_grade_9_12, \
        incident_by_grade.grade_k_5, incident_by_grade.grade_6_8, incident_by_grade.grade_9_12)
        .filter(district.id == district_total.district_id)
        .filter(incident_by_grade.district_id == district_total.district_id)
        .filter(incident_by_grade.school_year == district_total.school_year)
        .all())
    
    all_info = []
    for id, name, school_year, total_enrollment, total_grade_k_5, total_grade_6_8, total_grade_9_12, grade_k_5, grade_6_8, grade_9_12  in results:
        district_dict = {}
        district_dict["name"] = name 
        district_dict["id"] = id
        district_dict["school_year"] = school_year 
        district_dict["total_enrollment"] = total_enrollment
        district_dict["total_grade_k_5"] = total_grade_k_5
        district_dict["total_grade_6_8"] = total_grade_6_8
        district_dict["total_grade_9_12"] = total_grade_9_12
        district_dict["grade_k_5"] = grade_k_5
        district_dict["grade_6_8"] = grade_6_8
        district_dict["grade_9_12"] = grade_9_12

        all_info.append(district_dict) 
   

    return jsonify(all_info)

@app.route("/data/race")
def data_race():
    
    # Query the database
    session = Session(engine)

    results = (session.query(district.id, district.name, district_total.school_year, district_total.total_enrollment, \
        district_total.total_amer_indian, district_total.total_asian_pacific_islander, district_total.total_hispanic, \
        district_total.total_black, district_total.total_white, district_total.total_multi_race, \
        incident_by_race.amer_indian, incident_by_race.asian_pacific_islander, incident_by_race.hispanic, \
        incident_by_race.black, incident_by_race.white, incident_by_race.multi_race)
        .filter(district.id == district_total.district_id)
        .filter(incident_by_race.district_id == district_total.district_id)
        .filter(incident_by_race.school_year == district_total.school_year)
        .all())
    
    all_info = []
    for id, name, school_year, total_enrollment, total_amer_indian, total_asian_pacific_islander, total_hispanic, total_black, total_white, total_multi_race, amer_indian, asian_pacific_islander, hispanic, black, white, multi_race in results:
        
        district_dict = {}
        district_dict["name"] = name 
        district_dict["id"] = id
        district_dict["school_year"] = school_year 
        district_dict["total_enrollment"] = total_enrollment
        district_dict["total_amer_indian"] = total_amer_indian
        district_dict["total_asian_pacific_islander"] = total_asian_pacific_islander
        district_dict["total_hispanic"] = total_hispanic 
        district_dict["total_black"] = total_black
        district_dict["total_white"] = total_white
        district_dict["total_multi_race"] = total_multi_race 
        district_dict["amer_indian"] = amer_indian
        district_dict["tasian_pacific_islander"] = asian_pacific_islander
        district_dict["hispanic"] = hispanic 
        district_dict["tblack"] = black
        district_dict["white"] = white
        district_dict["multi_race"] = multi_race 
        all_info.append(district_dict) 
   

    return jsonify(all_info)
    
# This statement is required for Flask
if __name__ == '__main__':
    app.run(debug=True)