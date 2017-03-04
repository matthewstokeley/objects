(function(__) {

	var removeUndefined = function(array) {
		if (!Array.isArray(array)) {
			return false;
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