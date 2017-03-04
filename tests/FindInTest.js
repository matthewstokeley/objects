/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var FindInTest = function FindInTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

FindInTest.prototype.test = function() {

	var result = this.fn.apply(this, this.args);

	if (!result) {
		return false;
	}

	return true;

};

module.exports = FindInTest;