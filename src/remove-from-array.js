(function(__) {

	/**
	 * [removeFromArray description]
	 * @param  {Array} array         [description]
	 * @param  {} valueToRemove      [description]
	 * @throws Exception
	 * @return {Array}               [description]
	 */
	var removeFromArray = function(array, valueToRemove) {
	
		if (!Array.isArray(array)) {
			throw new Exception('argument must be an array')
		}

		var newArr = [];

		for (var i = 0; i < array.length; i++) {
			if (array[i] !== valueToRemove) {
				newArr.push(array[i]);
			}
		}

		return newArr;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.removeFromArray = removeFromArray;

})(__);