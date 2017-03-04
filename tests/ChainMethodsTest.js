/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var ChainMethodsTest = function ChainMethodsTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

ChainMethodsTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	return true;

};

module.exports = ChainMethodsTest;