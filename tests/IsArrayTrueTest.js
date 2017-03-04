/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var IsArrayTrueTest = function IsArrayTrueTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

IsArrayTrueTest.prototype.test = function() {

	if (this.result !== false) {
		return false;
	}

	return true;

};

module.exports = IsArrayTrueTest;