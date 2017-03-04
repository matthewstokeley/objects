/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var InheritTest = function InheritTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

InheritTest.prototype.test = function() {

	if (typeof this.result !== 'function') {
		return false;
	}

	if (this.result.prototype.method !== this.args[0].prototype.method) {
		console.log('child class did not inherit');
		return false;
	}

	return true;

};

module.exports = InheritTest;