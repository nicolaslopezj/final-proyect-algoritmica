ComputationSchema = new SimpleSchema({
	a: {
		type: Number,
		label: "Number of type a questions",
		min: 1,
		max: 10000000
	},
	b: {
		type: Number,
		label: "Number of type b questions",
		min: 1,
		max: 10000000
	},
	c: {
		type: Number,
		label: "Number of type c questions",
		min: 1,
		max: 10000000
	},
})