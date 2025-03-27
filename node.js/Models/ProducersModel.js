const mongoose = require('mongoose');

const ProducersSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true},
    shortDescription: {type: String, require: false},
});

const Producers = mongoose.model('Producers',ProducersSchema);

module.exports = ( Producers );
