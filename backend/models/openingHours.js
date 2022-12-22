var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var openingHoursSchema = new Schema({
    name: { type: String, unique: true, required: true},
    description: {type: String, required: true},
    openingHours: {type: String, required: true},
    active: {type: Boolean, required: true} //Will be used to toggle if its shown in the frontend
});

module.exports = mongoose.model('OpeningHours', openingHoursSchema);