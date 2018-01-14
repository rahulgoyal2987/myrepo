// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express				// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port

// routes ======================================================================
var func = require('./app/routes.js');
func(app);
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
