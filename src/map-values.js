// (function(__) {

// 	/**
// 	 * 
// 	 */
// 	var mapValues = function mapValues(array, properties) {

// 		if (!array ||
// 			Array.isArray(array)) {
// 			console.log('map values requires an array');
// 		}

// 		if (!properties) ||
// 			Array.isArray(properties) {
// 			console.log('properties must be an array');
// 		}

// 		if (properties.length !== array.length) {
// 			console.log('properties and array don\'t match');
// 		}

// 		var obj = {};

// 		for (var i = 0; i < array.length; i++) {
// 			obj[properties[i]] = array[i];
// 		}

// 		return obj;
	
// 	};

// 	if (!__ || __ === 'undefined') {
// 		__ = {};
// 	}

// 	__.mapValues = mapValues;

// })(__);