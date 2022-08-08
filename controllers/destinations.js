//import the model
//access the flight document to add a destination to.

const Flight = require("../models/flight");

module.exports = {
    create,
};

function create(req, res) {
  // First we have to find the flight
    Flight.findById(req.params.id, function (err, flightDocument) {
    // then we need to add destination (aka req.body) to that flights destination array
    console.log(flightDocument, " <- flightDocument");
    flightDocument.destinations.push(req.body); 
   // changing the document that we found from the database,
   //save the document
    flightDocument.save(function(err) {
        res.redirect(`/flights/${req.params.id}`);
    });
});
}
