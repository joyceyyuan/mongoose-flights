//Create a config/database.js module that connects to a database named flights
//need to require the model is server.js
const mongoose = require('mongoose');

//flights is the name of the db, it will either connect to a flights database in mongodb
// or it will create a flights database in mongodb
mongoose.connect('mongodb://localhostflights');


// this will fire when mongoose (our express app)
// has established a connecction with mongodb on port 27017
mongoose.connection.on('connected', function(){
	console.log(`Connected to Mongodb at 27017`)
})