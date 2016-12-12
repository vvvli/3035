var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
	name: String,
	about: String,
	education: String,
	skill: String
});

var model = mongoose.model('Users', UsersSchema);

module.exports = model;


