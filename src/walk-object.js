(function(__) {

	/**
	 * iterates an object and executes a callback
	 * @param  {Object}   object  [description]
	 * @param  {Function} fn      [description]
	 * @param  {Object}   context [description]
	 * @throws {Exception}
	 */
	var walkObject = function(object, fn, context) {

		if (!context) {
			context = this;
		}

		if (typeof object !== 'object') {
			throw new Exception('');
		}

		if (typeof fn !== 'function') {
			throw new Exception('object mapper needs a callback function');
		}

		var args = arguments.length > 3 ? Array.prototype.slice(arguments, 3) : undefined;

		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				fn.apply(context, [object[property], property, object].concat(args));
			}
		}
		
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.walkObject = walkObject;

})(__);