const mongoose = require('mongoose');

const ProductionTypeSchema = new mongoose.Schema({
    id: {type: String, require: true},
    name: {type: String, require: true},
    details: {type: String, require: false},
    producerID: {type: String, require: true}
});


const ProductionType = mongoose.model('ProductionType',ProductionTypeSchema);

module.exports = ( ProductionType );
