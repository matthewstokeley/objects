(function(__) {

	/*
	 * @param  {Array} array      [description]
	 * @param  {Array} properties [description]
	 * @return {Object}            [description]
	 */
	var arraysToObject = function arraysToObject(array, properties) {

		if (!array ||
			!Array.isArray(array)) {
			throw new Exception('first arguments must be an array');
		}

		if (!properties ||
			!Array.isArray(properties)) {
			throw new Exception('properties must be an array');
		}

		if (properties.length !== array.length) {
			throw new Exception('properties and array don\'t match');
		}

		var obj = {};

		for (var i = 0; i < array.length; i++) {
			obj[properties[i]] = array[i];
		}

		return obj;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.arraysToObject = arraysToObject;

})(__);