(function(__) {

	var mapToObject = function(array, fn) {

		if (!context || context === undefined) {
			context = this;
		}

		if (typeof fn !== 'function') {
			throw new Exception('the mapper needs a function');
		}

		return __.arrayToObject(array.map(fn));

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mapToObject = mapToObject;

})(__);