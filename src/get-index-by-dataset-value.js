(function(__) {

	/**
	 * [getIndexByDatasetValue description]
	 * @param  {String} key      [description]
	 * @param  {String} value    [description]
	 * @param  {Array} haystack [description]
	 * @return {Number || Boolean}          [description]
	 */
	function getIndexByDatasetValue(key, value, haystack) {

		if (!haystack || 
			!Array.isArray(haystack)) {
			throw new Exception('haystack must be an array of nodes');
		}

       for (var i = 0; i < haystack.length; i++) {
            if (haystack[i].dataset[key] && haystack[i].dataset[key] === value.toString()) {
                return i;
            }
        }
        return false;
	}


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.getIndexByDatasetValue = getIndexByDatasetValue;

})(__);

