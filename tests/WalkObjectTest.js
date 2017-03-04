/**
 * remove undefined values from an array
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var WalkObjectTest = function WalkObjectTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

WalkObjectTest.prototype.test = function() {
	return true;
};

module.exports = WalkObjectTest;