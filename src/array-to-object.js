(function(__) {

	/**
	 * 
	 */
	var arrayToObject = function arrayToObject(array) {

		if (!array ||
			!Array.isArray(array)) {
			console.log('map values requires an array');
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