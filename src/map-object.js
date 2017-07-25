(function(__) {

	/**
	 * [mapObject description]
	 * @param  {[type]}   object  [description]
	 * @param  {Function} fn      [description]
	 * @param  {[type]}   context [description]
	 * @throws {Exception}
	 * @return {[type]}           [description]
	 */
	var mapObject = function(object, fn, context) {

		if (!context || context === undefined) {
			context = this;
		}

		if (typeof fn !== 'function') {
			throw new Exception('the mapper needs a function');
		}

		var arr = [];

		var args = arguments.length > 3 ? Array.prototype.slice(arguments, 3) : undefined;

		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				arr.push(fn.apply(context, [object[property], property, object].concat(args)));
			}
		}

		return arr;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mapObject = mapObject;

})(__);