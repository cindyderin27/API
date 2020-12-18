var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var consultsSchema = new Schema({
	'dateDebut':Date,
	'dateFin' : Date
});

module.exports = mongoose.model('consult', consultsSchema);