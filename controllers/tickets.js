const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    create
};


function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if(err){
            console.log(err, ' <- error in new ticket controller');
        }
        res.render(`tickets/new`, {flight});
    });
}

function create(req, res) {
    //add flight property on req.body object 
    req.body.flight = req.params.id
    Ticket.findById(req.body, function (err, ticket) {
        if(err){
            console.log(err, ' <- error in the Ticket create controller');
        }
        res.redirect(`/flights/${req.params.id}`);
        })
    }