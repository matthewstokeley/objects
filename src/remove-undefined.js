(function(__) {

	/**
	 * remove undefined values from an array
	 * @param  {Array} array [description]
	 * @throws {Exception}
	 * @return {Array}       [description]
	 */
	var removeUndefined = function(array) {

		if (!Array.isArray(array)) {
			throw new Exception('argument must be an array');
		}

		function findDefinedValues(value) {
			if (value !== undefined) {
				return value;
			}
		}

		return array.filter(findDefinedValues);

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.removeUndefined = removeUndefined;

})(__);