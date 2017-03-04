(function(__) {

	var inherit = function(parent, child) {

		child.prototype = Object.assign({}, parent.prototype, child.prototype);

		return child;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.inherit = inherit;

})(__);