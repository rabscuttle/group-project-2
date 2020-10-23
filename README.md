# Group Project 2
## MN School Districts Discipline Data
### Scott Rehn, Kelli Roddy, Amanda Stambaugh, Katie Welter 
---
# Set up
1) Clone our repository

2) Create a database in PGAdmin named 'MNDistrictData'

3) Right click on 'MNDistrictData' and select Query Tool...

4) Create the tables from the schema.sql file.  This can be done by dragging the file (located in the Resources directory) into a query tool or using the Open file menu item to navigate to the Resources directory.  Run the SQL.

5) Populate each table with one of the .csv files in the Resources directory. There is a .csv file with the same name as each table. **NOTE: The district table must be populated first.**

	a) Right-click the table and select 'Import/Export...'

	b) Verify the button in the Import/Export field is set to 'Import'

	c) Use the '...' button to the right of the Filename field to select the proper .csv in the Resources directory

	d) Under 'Miscellaneous', verify 'Header' is set to 'Yes'

6) In the root directory (where app.py lives) create a config.py with your PGAdmin username and password:

		username = x

		password = x

7) In the 'static/js' directory, create a config.js with your api key

		const API_KEY = x

# Run the server
1) Once your database and config files are set up, open a GitBash window (or New Termial at Folder if on a Mac) for the directory of the repository and activate your environment

		source activate NewPythonData

2) Run app.py

		python app.py 

3) In a web browser (preferably Google Chrome) navigate to http://127.0.0.1:5000/

# About
The MN School Districts Discipline Data project visualizes the data associated with each school district's disciplinary incidents recorded in the state of Minnesota. School years included are 14-15, 15-16, 16-17, and 18-19.  Minnesota public school districts self-report student disciplinary data through Minnesota Department of Education's electronic disciplinary incident reporting system (DIRS). The data summarize the disciplinary incidents as well as student demographic data (grade, gender, race/ethnicity) for disciplinary actions. A disciplinary action is defined as an out of school suspension for one day or more, expulsion or exclusion.
 
Our dashboard allows this data to be analyzed by each district via a map of Minnesota with each school district outlined.  Our charts shows the trends of enrollment vs. incidents over time as well as the number of incidents by gender, grade and race.  Total enrollment for each district is included in our charts to give the break down of each category context.

### References
Coding for legend uses Leaflet.Legend plugin developed by GitHub user "ptma" and distributed under MIT License (link to copyright notice - https://github.com/ptma/Leaflet.Legend/blob/master/LICENSE)