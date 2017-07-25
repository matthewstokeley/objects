(function(__) {

	/**
	 * remove a key value pair based on the key from an object
	 * returns a new object
	 * @param  {Object} object [description]
	 * @param  {String} key    [description]
	 * @throws {Exception}
	 * @return {Object}        [description]
	 */
	var removeFromObject = function(object, key) {
	
		if (typeof object !== 'object') {
			throw new Exception('object must be a key')
		}

		if (typeof key !== 'string') {
			throw new Exception('key must be a string');
		}

		var newObj = {};

		for (var property in object) {
			if (property !== key) {
				newObj[property] = object[property];
			}
		}

		return newObj;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.removeFromObject = removeFromObject;

})(__);