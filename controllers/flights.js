const Flight = require('../models/flight')
// import our Model object which can perform crud operations
// on the flights collection in our mongodb database

module.exports = {
    index, 
    new: newFlight,
    create,
	show
}

function show(req, res) {
	Flight.findById(req.params.id, function(err, flightDocument) {
	console.log(flightDocument, " <- show page")
	res.render('flights/show', { title: 'Flight Detail', flight: flightDocument});
	});
}


//list all the flights
function index(req, res) {
    Flight.find({}, function(err, allflightsInDatabase) {
		// console,log(allflightsInDatabase,'<- all the flights');
		if(err){
			res.send('You have an error trying to find the flights, check the terminal')
		}

		//response should be inside of callback
		//because this is after we got a response from the database that
		//we found all the flights
        res.render('flights/index', { 
			flights: allflightsInDatabase
		})
    }).sort({departs: 'asc'});
}


function newFlight(req, res) {
	const d = new Date();
	const dt = new Date(d.setFullYear(d.getFullYear() + 1));
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', {departsDate});
}

function create(req, res){
	// log out what the function needs
	console.log(req.body)
	
	Flight.create(req.body, function(err, flightDocumentCreatedInTheDatabase){
		if(err){
			console.log(err, ' <- err in the Flight create controller')
			return res.render('flights/new')
		}

		console.log(flightDocumentCreatedInTheDatabase, ' <- flight created in db')
		//normally redirect, but for testing 
		// the response is always inside of the callback of the Flight model crud operation
		// because we want to confirm with the database our action before we respond to the client
		// aka the browser
		res.redirect('/flights') 
		//let's update the redirect in the create action
		// for now, redirect right back to new.ejs
	})
}