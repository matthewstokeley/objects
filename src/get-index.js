(function(__) {

	/**
	 * facade for indexOf
	 * @param  {} needle   [description]
	 * @param  {Array} haystack [description]
	 * @throws {Exception}
	 * @return {Number}          [description]
	 */
	var getIndex = function findIn(needle, haystack) {

		if (!needle) {
			throw new Exception();
		}

		if (!haystack || 
			!Array.isArray(haystack)) {
			throw new Exception('haystack must be an array');
		}

		return haystack.indexOf(needle);
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.getIndex = getIndex;

})(__);