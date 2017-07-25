(function(__) {

	/**
	 * returns the result of a map to an object
	 * @param  {Array}   array [description]
	 * @param  {Function} fn    [description]
	 * @return {Object}         [description]
	 */
	var mapToObject = function(array, fn) {
		if (!Array.isArray(array)) {
			throw new Exception('argument must be an array');
		}

		if (typeof fn !== 'function') {
			throw new Exception('argument must be a function');
		}

		return __.arrayToObject(array.map(fn));

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mapToObject = mapToObject;

})(__);