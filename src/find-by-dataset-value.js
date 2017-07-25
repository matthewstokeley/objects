(function(__) {

	/**
	 * [findByDatasetValue description]
	 * @param  {String} key      [description]
	 * @param  {String} value    [description]
	 * @param  {Array} haystack  [description]
	 * @return {}                [description]
	 */
	var findByDatasetValue = function findByDatasetValue(key, value, haystack) {

		/**
		 * [if description]
		 * !haystack || !Array.isArray(haystack) [description]
		 * @throws {Exception}
		 */
		if (!haystack || 
			!Array.isArray(haystack)) {
			throw new Exception('haystack must be an array');
		}

		/**
		 * [for description]
		 * @param  {[type]} var i [description]
		 * @return {[type]}     [description]
		 */
        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i].dataset[key] && haystack[i].dataset[key] === value.toString()) {
                return haystack[i];
            }
        }
        
        return false;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.findByDatasetValue = findByDatasetValue;

})(__);

