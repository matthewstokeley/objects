(function(__) {

	var removeBlankArrays = function(array) {
	
		if (!Array.isArray(array)) {
			return false;
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