var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminsSchema = new Schema({
	name: String,
	edu: String,
	skills: String,
	projects: String
});

var model = mongoose.model('Admins', AdminsSchema);

module.exports = model;







