var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var NurseSchema = new Schema({
	uuid: {
		type: String,
		required: true
	},
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Nurse', NurseSchema);
