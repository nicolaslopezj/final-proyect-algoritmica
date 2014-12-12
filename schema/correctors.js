Correctors = new Mongo.Collection("correctors");

SpeedSchema = new SimpleSchema({
	a: {
		type: Number,
		label: "Type a",
		min: 1,
		max: 10000
	},
	b: {
		type: Number,
		label: "Type b",
		min: 1,
		max: 10000
	},
	c: {
		type: Number,
		label: "Type c",
		min: 1,
		max: 10000
	},
})

CorrectorsSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	max: {
		type: Number,
		label: "Max corrections",
		min: 1,
	},
	speed: {
		type: SpeedSchema,
		label: "Speed for one question of type (in seconds)"
	}
})

Correctors.attachSchema(CorrectorsSchema);