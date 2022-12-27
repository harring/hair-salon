var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
   name: { type: String, required: true, trim: true},
   description:  {type: String, required: true},
   price: { type: Number, required: true},
   image: { type: String}
});

module.exports = mongoose.model('Services', serviceSchema);