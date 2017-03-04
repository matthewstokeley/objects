/**
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var RemoveBlankArraysTest = function RemoveBlankArraysTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

RemoveBlankArraysTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	console.log(this.result);

	function checkForBlanks(array) {

		if (array.length === 0 ||
			array === 'undefined') {
			return false;
		}
		return true;
	}

	function ifTrue(result) {
		if (result !== false) {
			return result;			
		}
	}

	var map = this.result.map(checkForBlanks);
	var result = map.filter(ifTrue);

	if (result.length !== this.result.length) {
		return false;
	}

	return true;

};

module.exports = RemoveBlankArraysTest;