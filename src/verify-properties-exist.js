(function(__) {

	var verifyPropertiesExist = function(object, properties) {

		if(!is.array(properties)) {
			return false;
		}

		for (var i = 0; i < properties.length; i++) {
			if (object[properties[i]] === undefined) {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.verifyPropertiesExist = verifyPropertiesExist;

})(__);