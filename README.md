# vanilla-javascript-hotels-application
This is a plain javascript application for the Hotels.com Top Destinations page.

Steps to run the code:
1. Clone or download this application.
2. install node (version v6.9.0) on you system - https://nodejs.org/en/download/
3. run 'npm install' on your terminal to download all the dependancies (npm packages)
4. run 'grunt htmlConvert cssmin' on your terminal to minify CSS as well as save HTML templates as strings for the underscore templating engine.
5. Then open index.html on a browser. 

This application has the following:
- index.html file which is the base of the application from where everything is instantiated.
- app.js file which holds the require.js config and entries. The entries include the index.js file from where the app runs as well as the templates file which holds the HTML strings that will render the accordions.
- app/index.js file is the main file that has the code to render the accordions and to handle accordion toggle on the page.
- src/css/style.css file where all the user styles are listed. This file is converted to a minified file called style.min.css using the cssmin grunt task.
- templates/appTemplates.js - holds a key value pair of the names of HTML vs their HTMLs in the string format. These template strings are got by running a grunt task called htmlConvert.
- images folder that holds all the images shared in the exercise.

This application uses the following:
- bootstrap for the page to adapt to device width. the size of the bootstrap file downloaded can be further reduced by only downloading the grid component in bootstrap if it needs further reduction.
- jQuery to query and manipulate the DOM.
- underscore is used as a template engine to combine the markup and the data and render the body of the page.
- requireJS is used to provide modular structure to the application, handle dependancies as well as reduce the incidence of script tags on the index HTML file.
- grunt is a task runner. It is used in the project to minify CSS and to create template strings that will be used to render HTML pages in the application.
