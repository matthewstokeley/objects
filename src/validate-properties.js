(function(__) {

	/**
	 * [validateProperties description]
	 * @param  {[type]} properties [description]
	 * @return {[type]}            [description]
	 */
	var validateProperties = function(properties) {

		if(Array.isArray(properties)) {
			return false;
		}

		for (var i = 0; i < properties.length; i++) {
			if (properties[i] === undefined) {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.validateProperties = validateProperties;

})(__);