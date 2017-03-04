/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var ArraysToObjectTest = function ArraysToObjectTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

ArraysToObjectTest.prototype.test = function() {

	console.log(this.result);

	if (this.result !== false) {
		return false;
	}

	return true;

};

module.exports = ArraysToObjectTest;