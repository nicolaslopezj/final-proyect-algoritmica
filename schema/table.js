TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Correctors = new Tabular.Table({
	name: "CorrectorsList",
	collection: Correctors,
	columns: [
		{ data: "name", title: "Name" },
		{ data: "max", title: "Max" },
		{ data: "speed.a", title: "A" },
		{ data: "speed.b", title: "B" },
		{ data: "speed.c", title: "C" },
		{ tmpl: Meteor.isClient && Template.correctorsDelete, title: "Delete" }
	]
});