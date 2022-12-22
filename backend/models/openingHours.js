var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var openingHoursSchema = new Schema({
    name: { type: String, unique: true},
    description: {type: String},
    openingHours: {type: Number},
    active: {type: Boolean} //Will be used to toggle if its shown in the frontend
});

module.exports = mongoose.model('OpeningHours', openingHoursSchema);