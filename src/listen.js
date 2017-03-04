(function(__) {

	/**
	 * element and event listeners implementation
	 */

	var listen = function(options) {
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				if (typeof options[property] === 'function') {
					events.addListener(property, options.property);
				} else if (Array.isArray(options[property])) {
					options[property][0].addEventListener(options[property][1], options.property[2]);
				}
			}
		}
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.listen = listen;

})(__);