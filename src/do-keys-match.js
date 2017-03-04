	/**
	 * [doKeysMatch description]
	 * @param  {[type]} properties [description]
	 * @return {[type]}            [description]
	 */
	function doKeysMatch(properties) {
		for (var i = 0; i < properties[0].length; i++) {
			if (properties[0][i] !== properties[1][i]) {
				return false;
			}
		}
		return true;
	}
