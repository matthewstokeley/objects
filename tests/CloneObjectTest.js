/**
 * test for new objects without 'deeply-linked' references to properties
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var CloneObjectTest = function CloneObjectTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

CloneObjectTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	if (typeof this.result !== 'object') {
		console.log('result must be an object');
		return false;
	}

	if (this.args === this.result) {
		return false;
	}
	
	if (this.args[0].prototype === this.result.prototype) {
		return false;
	}


	return true;

};

module.exports = CloneObjectTest;