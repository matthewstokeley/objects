(function(__) {

	/**
	 * [findIn description]
	 * @return {[type]} [description]
	 */
	var findIn = function findIn(needle, haystack) {

		if (!haystack || 
			!Array.isArray(haystack)) {
			throw new Error('haystack must be an array');
		}

	    for (var i = 0; i < haystack.length; i++) {
	        if (needle === haystack[i]) {
	            return true;
	        }
	    }
	    return false;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.findIn = findIn;

})(__);