/**
 * remove undefined values from an array
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var UpdatedObjectPropertiesTest = function UpdatedObjectPropertiesTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

UpdatedObjectPropertiesTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	console.log(this.result);

	return true;

};

module.exports = UpdatedObjectPropertiesTest;