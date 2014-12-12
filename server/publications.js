Meteor.publish('correctors', function() {
	return Correctors.find();
});