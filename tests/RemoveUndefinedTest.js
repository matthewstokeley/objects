/**
 * remove undefined values from an array
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var RemoveUndefinedTest = function RemoveUndefinedTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

RemoveUndefinedTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	console.log(this.result);

	function checkForBlanks(value) {

		if (value === 'undefined') {
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

module.exports = RemoveUndefinedTest;