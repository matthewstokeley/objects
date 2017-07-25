(function(__) {

	/**
	 * arrayMerge is a facade for the Array.prototype.concat method,
	 * but only accepts two arrays
	 * @param  {Array} array  [description]
	 * @param  {Array} array2 [description]
	 * @throws {Exception}
	 * @return {Array}        [description]
	 */
	var mergeArrays = function arrayMerge(array, array2) {

		if (!array ||
			!Array.isArray(array) ||
			!array2 ||
			!Array.isArray(array2)) {
			throw new Exception('parameters must be an array');
		}

		return array.concat(array2);
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mergeArrays = mergeArrays;

})(__);