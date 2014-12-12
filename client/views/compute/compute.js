var dict = new ReactiveDict;

Template.compute.events({
	'click button': function () {
		var max = {a:$("#computeFrom input[name=a]").val(), b: $("#computeFrom input[name=b]").val(), c:$("#computeFrom input[name=c]").val()};
		var map = { start: {}, a: { final:0 }, b: { final:0 }, c: { final:0 }, final: {} };
		Correctors.find().fetch().map(function (corrector) {
			map.start[corrector._id] = 0;
			map[corrector._id] = {
				a: corrector.speed.a,
				b: corrector.speed.b,
				c: corrector.speed.c
			};
		});
		var graph = new Graph(map);
		var result = {};
		var count = {a:0, b:0, c:0};
		var time = 0;
		while (true) {
			var path = graph.findShortestPath('start', 'final');
			if (!path) {
				break;
			}
			var _id = path[1];
			var question = path[2];
			if (!result[_id]) {
				result[_id] = {a:0, b:0, c:0};
			}
			count[question]++;
			result[_id][question]++;
			time += map[_id][question];

			if (result[_id].a + result[_id].b + result[_id].c == Correctors.findOne(_id).max) {
				delete map[_id];
			}
			if (count[question] == max[question]) {
				delete map[question];
			}
		}

		dict.set('time', time);
		dict.set('result', result);

		console.log(result);
	}
});

Template.compute.helpers({
	result: function () {
		return Object.keys(dict.get('result'));
	},
	getTotalTime: function() {
		return dict.get('time');
	},
	getCorrectorName: function(_id) {
		return Correctors.findOne(_id).name;
	},
	getNumberOfa: function(_id) {
		return dict.get('result')[_id].a;
	},
	getNumberOfb: function(_id) {
		return dict.get('result')[_id].b;
	},
	getNumberOfc: function(_id) {
		return dict.get('result')[_id].c;
	}
});