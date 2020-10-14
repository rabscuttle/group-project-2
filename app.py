# Import 
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template, redirect

#################################################
# Database Setup
#################################################

# Create Engine
#engine = create_engine("postgresql:///username:password@localhost/database")

# reflect an existing database into a new model
#Base = automap_base()
# reflect the tables
#Base.prepare(engine, reflect=True)

# Save reference to the table
#Passenger = Base.classes.passenger # Example

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    return render_template("index.html")
 


if __name__ == '__main__':
    app.run(debug=True)
