(function(__) {


	var mapMethods = function mapMethods(options) {

		if (!options.args || !Array.isArray(options.args)) {
			return false;
		}

		if (!options.fn || !Array.isArray(options.fn)) {
			return false;
		}

		var args = __.cloneObject(options.args);

		var returnFunctions = (function(args) {
			return function callFunctions(fn) {
				fn.call(this, args[0]);
			};
		})(args);

		// return false;
		return options.fn.map(returnFunctions.bind(this));

	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mapMethods = mapMethods;

})(__);