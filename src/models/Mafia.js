const { Schema, model } = require('mongoose');

const mafiaSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

module.exports = model('mafia', mafiaSchema);
