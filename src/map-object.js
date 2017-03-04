(function(__) {

	var mapObject = function(object, fn, context) {

		if (!context || context === undefined) {
			context = this;
		}

		if (typeof fn !== 'function') {
			throw new Exception('the mapper needs a function');
		}

		var arr = [];

		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				arr.push(fn.call(context, object[property], property, object));
			}
		}

		return arr;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mapObject = mapObject;

})(__);