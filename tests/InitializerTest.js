var InitializerTest = function InitializerTest(fn, args) {
	this.fn = fn;
	this.args = args;
	this.init.call(this, fn, args);
};

InitializerTest.prototype.test = function() {
	
	if (typeof this.fn !== 'function') {
		return false;
	}

	return true;
};

module.exports = InitializerTest;