/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var ObjectToArrayTest = function ObjectToArrayTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

ObjectToArrayTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	if (!Array.isArray(this.result)) {
		return false;
	}

	var objectLength = 0;
	for (var property in this.args[0]) {
		if(this.args[0].hasOwnProperty(property)) {
			objectLength++;
		}
	}

	if (this.result.length !== objectLength) {
		throw "not all arguments were mapped";
		return false;
	}

	return true;

};

module.exports = ObjectToArrayTest;