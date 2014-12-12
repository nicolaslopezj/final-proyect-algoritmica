AutoForm.hooks({
	correctorsAddForm: {
		onSuccess: function() {
			Router.go('correctors.index');
		}
	}
})