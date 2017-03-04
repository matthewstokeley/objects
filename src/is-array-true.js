(function(__) {

	/**
	 * filter an array of booleans
	 * return false if there is a false value
	 * otherwise, return true
	 * @return {Boolean} [description]
	 */
	var isArrayTrue = function(array) {

		if (!Array.isArray(array)) {
			return false;
		}

		for (var i = 0; i < array.length; i++) {
			
			if (typeof array[i] !== 'boolean' &&
				!Array.isArray(array[i])) {
				return false; 
			}

			if (Array.isArray(array[i])) {
				if(!isArrayTrue(array[i])) {
					return false;
				}
			}

			if (array[i] === false) {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.isArrayTrue = isArrayTrue;

})(__);