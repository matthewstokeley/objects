(function(__) {

	/**
	 * facade for the indexOf method
	 * @param  {[type]} needle   [description]
	 * @param  {[type]} haystack [description]
	 * @return {[type]}          [description]
	 */
	var findIn = function findIn(needle, haystack) {

		if (!haystack || 
			!Array.isArray(haystack)) {
			throw new Exception('haystack must be an array');
		}

		return haystack.indexOf(needle) !== -1 ? true : false;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.findIn = findIn;

})(__);