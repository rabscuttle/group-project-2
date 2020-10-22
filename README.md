# Group Project 2
# MN School Districts Discipline Data
Kelli Roddy, Amanda Stambaugh, Katie Welter, Scott Rehn
---
# Setting up
1) Create a database in PGAdmin named 'MNDistrictData'
2) Import (click-and-drag) the schema.sql file into a query tool and then run it
3) Under 'Schemas' and 'Tables', import each csv from the 'resources' folder by
	a) Right-clicking the table and choosing 'Import/Export...'
	b) Verify the Import/Export button in the menu is set to 'Import'
	c) Enter the path/filename
	d) Under 'Miscellaneous', verify 'Header' is set to 'Yes'
4) In the base directory (where app.py lives) create a 'config.py' with your PGAdmin username and password
5) In the 'static/js' folder, create a 'config.js' with your api key

# Running the server
1) Once your database is set up, open a GitBash window in the current path and activate your environment
`source activate NewPythonData`
2) Run the app.py
`python app.py`
3) In a web browser (preferably Google Chrome) navigate to http://127.0.0.1:5000/

# About
Minnesota public school districts self-report student disciplinary data through Minnesota Department of Education's electronic disciplinary incident reporting system (DIRS). The data summarize the disciplinary incidents as well as student demographic data (grade, gender, race/ethnicity) for disciplinary actions. A disciplinary action is defined as an out of school suspension for one day or more, expulsion or exclusion.