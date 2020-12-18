var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var doctorSchema = new Schema({
	'name' : String,
	'birthday' : Date,
	'tel' : String,
	'hospitalName' : String
});

module.exports = mongoose.model('doctor', doctorSchema);