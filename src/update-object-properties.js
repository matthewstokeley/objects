(function(__) {

	/**
	 * [updateObjectProperties description]
	 * @todo refactor
	 * @param  {[type]} original [description]
	 * @param  {[type]} update   [description]
	 * @return {[type]}          [description]
	 */
	updateObjectProperties = function(original, update) {

		if (typeof original !== 'object' ||
			typeof update !== 'object') {
			throw new Exception('parameters must be objects');
		}

		for (var property in original) {
			//if (original.hasOwnProperty(property)) {
		        if (update[property]) {
		            // if both the update property and the object property
		            // exist and are objects
		            if(typeof update[property] === 'object') {
		                original[property] = updateObjectProperties(original[property], update[property]);
		            } else {
		                original[property] = update[property];                  
		            }
		        }
		    //}
		}

		for (var newProperty in update) {
		    if (update.hasOwnProperty(newProperty)) {
		        // if there is a property in the update object
		        // that is not in the original
		        if (original[newProperty] === 'undefined') {
		            original[newProperty] = update[newProperty];
		        }
		    }
		}

		return original;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.updateObjectProperties = updateObjectProperties;

})(__);