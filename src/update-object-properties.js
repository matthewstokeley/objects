(function(__) {

	/**
	 * @param  {[type]} original [description]
	 * @param  {[type]} update   [description]
	 * @return {[type]}          [description]
	 */
	// var updateObjectProperties = function updateObjectProperties(original, update) {
	// 	for (var property in original) {
	// 		if (original.hasOwnProperty(property)) {
	// 			if (update[property]) {
	// 				// if both the update property and the object property
	// 				// exist and are objects
	// 				if(typeof update[property] === 'object') {
	// 					original[property] = updateObjectProperties(original[property], update[property]);
	// 				} else {
	// 					original[property] = update[property];					
	// 				}

	// 			}
	// 		}
	// 	}

	// 	for (property in update) {
	// 		if (update.hasOwnProperty(property)) {
	// 			// if there is a property in the update object
	// 			// that is not in the original
	// 			if (!original[property]) {
	// 				original[property] = update[property];
	// 			}
	// 		}
	// 	}

	// 	return original;
	// };


	// updateObjectProperties = function(original, update) {
	//     for (var property in original) {
	// 	        if (update[property]) {
	// 	            // if both the update property and the object property
	// 	            // exist and are objects
	// 	            if(typeof update[property] === 'object') {
	// 	                original[property] = updateObjectProperties(original[property], update[property]);
	// 	            } else {
	// 	                original[property] = update[property];                  
	// 	            }
	// 	    }
	// 	}

	// 	for (var newProperty in update) {
	// 	    if (update.hasOwnProperty(newProperty)) {
	// 	        // if there is a property in the update object
	// 	        // that is not in the original
	// 	        if (!original[newProperty]) {
	// 	            original[newProperty] = update[newProperty];
	// 	        }
	// 	    }
	// 	}

	// 	return original;
	// 	};

	updateObjectProperties = function(original, update) {
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

		// function updateOriginal(value, property, object) {
		// 	 return original[property] === undefined ? original[property] = object[property] : null;
		// }

		// __.walkObject(update, updateOriginal);

		return original;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.updateObjectProperties = updateObjectProperties;

})(__);