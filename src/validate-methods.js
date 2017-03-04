(function(__) {

	/**
	 * [validateMethods description]
	 * @param  {[type]} methods [description]
	 * @return {[type]}         [description]
	 */
	var validateMethods = function(object, methods) {

		if(!is.array(methods)) {
			return false;
		}

		for (var i = 0; i < methods.length; i++) {
			if (object.prototype[methods[i]] === undefined) {
				return false;
			}

			if (typeof object.prototype[methods[i]] !== 'function') {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.validateMethods = validateMethods;

})(__);