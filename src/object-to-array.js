(function(__) {

	/**
	 * [objectToArray description]
	 * 
	 * @param  {Object]} object [description]
	 * @throws {Exception}
	 * @return {Array]}        [description]
	 */
	var objectToArray = function(object) {
		if (typeof object !== 'object') {
			throw new Exception('argument must be an object');
		}
		var arr = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				arr.push(object[property]);
			}
		}
		return arr;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.objectToArray = objectToArray;

})(__);