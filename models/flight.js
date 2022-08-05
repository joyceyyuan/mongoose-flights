const mongoose = require('mongoose');

// Creates the schema, which defines, 
// what the documents (objects) in a mongodb collection (movies) 
// will all look like
const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
})

// Compile the schema into a model and export it

// Create our model, which will create the collection, 
// and return to us and object that can perform CRUD
// operations on that collection (typically you'll use the model in controller files)
module.exports = moogoose.model('flight', flightSchema)