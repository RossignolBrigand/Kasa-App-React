const mongoose = require("mongoose");

const logementSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	userId: {
		type: String,
	},
	title: {
		type: String,
		required: true,
	},
	cover: {
		type: String,
		required: true,
	},
	pictures: {
		type: [String],
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	host: {
		name: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
			required: true,
		},
	},
	rating: {
		type: Number,
		required: true,
		min: 0,
		max: 5,
	},
	location: {
		type: String,
		required: true,
	},
	equipments: {
		type: [String],
		required: true,
	},
	tags: {
		type: [String],
		required: true,
	},
});

module.exports = mongoose.model("Logement", logementSchema);
