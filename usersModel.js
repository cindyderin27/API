var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	'name' : String,
	'nickname' : String,
	'password':String,
	'birthday' : Date,
	'job' : String,
	'organisation' : String

});

module.exports = mongoose.model('users', usersSchema);
