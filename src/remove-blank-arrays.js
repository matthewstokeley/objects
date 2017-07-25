(function(__) {

	/**
	 * [removeBlankArrays description]
	 * @todo refactor
	 * @param  {Array} array [description]
	 * @throws {Exception}
	 * @return {Array}       [description]
	 */
	var removeBlankArrays = function(array) {
	
		if (!Array.isArray(array)) {
			throws new Exception('argument must be an array');
		}

		function findNonEmptyArrays(array) {
			if (Array.isArray(array) &&
				array.length > 0) {
				return array;
			}
			if (!Array.isArray(array)) {
				return array;
			}
		}

		return array.filter(findNonEmptyArrays);


	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.removeBlankArrays = removeBlankArrays;

})(__);