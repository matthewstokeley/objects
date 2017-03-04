(function(__) {

	var objectToArray = function(object) {
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