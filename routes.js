subs = new SubsManager();

Router.map(function() {

	this.route('compute', {
		layoutTemplate: 'layout',
		path: '/compute',
		waitOn: function() {
			return Meteor.subscribe('correctors');
		}
	});

	this.route('correctors.index', {
		layoutTemplate: 'layout',
		path: '/',
	});

	this.route('correctors.add', {
		layoutTemplate: 'layout',
		path: '/add',
	});

});