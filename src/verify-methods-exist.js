var verifyMethodsExist = function(methods) {

	if(Array.isArray(methods)) {
		return false;
	}

	for (var i = 0; i < methods.length; i++) {
		if (methods[i] === undefined)
			return false;

		if(typeof methods[i] !== 'function')
			return false;
	}

	return true;

};