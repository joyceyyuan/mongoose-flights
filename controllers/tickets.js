const Flight = require('../models/flight');

module.exports = {
    createTicket,
};

function createTicket(req, res) {
    // First we have to find the flight
    Flight.findById(req.params.id, function (err, flightDocument) {
    // then we need to add ticket (aka req.body) to that flights ticket array
    console.log(flightDocument, " <- flightDocument");
    flightDocument.tickets.push(req.body); 
    // changing the document that we found from the database,
    //save the document
    flightDocument.save(function(err) {
        res.redirect(`/flights/${req.params.id}`);
        });
    })
}