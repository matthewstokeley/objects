(function(__) {

	var walkObject = function(object, fn, context) {

		if (!context) {
			context = this;
		}

		if (typeof fn !== 'function') {
			throw new Exception('object mapper needs a function');
		}

		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				fn.call(context, object[property], property, object);
			}
		}
		
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.walkObject = walkObject;

})(__);