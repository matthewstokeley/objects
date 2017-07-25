(function(__) {

	/**
	 * @param  {Array} array  [description]
	 * @return {Object}       [description]
	 */
	var arrayToObject = function arrayToObject(array) {

		if (!array ||
			!Array.isArray(array)) {
			throw new Exception('map values requires an array');
		}

		var obj = {};

		for (var i = 0; i < array.length; i++) {
			obj[i] = array[i];
		}

		return obj;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.arrayToObject = arrayToObject;

})(__);