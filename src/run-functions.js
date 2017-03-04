(function(__) {

	/**
	 * filter an array of booleans
	 * return false if there is a false value
	 * otherwise, return true
	 * @return {Boolean} [description]
	 */
	var runFunctions = function(options) {

		if (!Array.isArray(options.fn)) {
			throw new Exception('options must be an array');
		}

		if (!Array.isArray(options.args)) {
			throw new Exception('args must be an array');
		}

		if (!options.scope) {
			options.scope = this;
		}

		function run(fn, index, array) {

			if (typeof fn !== 'function') {
				return false;
			}
			
			fn.apply(options.scope, options.args);		
		
		}

		function loop(functions) {
			functions.forEach(run);
		}

		loop.call(this, options.fn);

    };

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.runFunctions = runFunctions;
	
})(__);