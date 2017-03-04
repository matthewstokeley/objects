(function(__) {
	// cloning objects with nested references
	/**
	 * @todo   refactor
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	var cloneObject = function cloneObject(object) {

		if (typeof object !== 'object') {
			return false;
		}

		var newObject = {};
		for (var property in object) {
			if(object.hasOwnProperty(property)) {
				if (typeof object[property] === 'object' &&
					object[property] !== null) {
					// check if dom or node
					// 
					if (is.dom(object[property]) || is.node(object[property])) {
						newObject[property] = object[property];
					} else {
						var count = 0;
						for (var objectProperty in object[property]) {
							count++;
						}
						if (count > 0) {
							newObject[property] = cloneObject(object[property]);
						} else {
							newObject[property] = Object.assign({}, object[property]);					
						}
					}

				} else {
					if (typeof object[property] !== undefined) {
						var descriptor = Object.getOwnPropertyDescriptor(object, property);	
						descriptor.value = object[property];
						Object.defineProperty(newObject, property, descriptor);
					} else {
						newObject[property] = object[property];
					}
				}
			}
		}
		return newObject;
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.cloneObject = cloneObject;

})(__);