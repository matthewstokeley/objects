var ExtendMethodTest = function ExtendMethodTest(fn, args) {
	this.args = args;
	this.fn = fn;
	this.init.call(this, fn, args);
};

ExtendMethodTest.prototype.test = function() {

	if (typeof this.result !== 'function') {
		return false;
	}

	var result = this.result.apply(this, this.args);
	console.log(result);

	return true;

};

module.exports = ExtendMethodTest;