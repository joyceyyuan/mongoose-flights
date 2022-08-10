const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates the schema, which defines, 
// what the documents (objects) in a mongodb collection (movies) 
// will all look like


// Embed the destinations in the flights

const destinationSchema = new Schema({
    airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
	arrival: Date
});


const flightSchema = new mongoose.Schema({
    airline: {
    type: String,
    enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
    type: String,
    enum: ['ATL', 'DFW', 'DEN', 'LAX' , 'SAN'],
    default:'DEN'
    },
    flightNo: {
    type: Number,
    min: 10,
    max: 9999
    },
    departs: {
    type: Date,
    default: function(){
        const d = new Date();
        const dt = new Date(d.setFullYear(d.getFullYear() + 1));
        const departsDate = dt.toISOString().slice(0, 16);
        return departsDate;
    }
    },
    destinations: [destinationSchema],
});

// Compile the schema into a model and export it

// Create our model, which will create the collection,
// and return to us and object that can perform CRUD
// operations on that collection (typically you'll use the model in controller files)
module.exports = mongoose.model('Flight', flightSchema);