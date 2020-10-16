##########
# Import #
##########

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
    return render_template("index.html", district=district, incident=incident, incident_by_gender=incident_by_gender, incident_by_grade=incident_by_grade, incident_by_race=incident_by_race)
 

# This statement is required for Flask
if __name__ == '__main__':
    app.run(debug=True)
