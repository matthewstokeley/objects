var ExtendAllMethodsTest = function ExtendAllMethodsTest(fn, args) {
	this.args = args;
	this.fn = fn;
	this.init.call(this, fn, args);
};

ExtendAllMethodsTest.prototype.test = function() {

	if(!this.result) {
		return false;
	}

	if (this.args[0] === this.result) {
		return false;
	}

	var newClass = new this.result({options: {}});

	if (typeof newClass !== 'object') {
		return false;
	}

	for (var property in this.args[0].prototype) {
		if (this.args[0].prototype.hasOwnProperty(property)) {
			if (!this.result.prototype[property]) {
				throw "a method did not inherit";
				return false;
			}
		}
	}

	return true;

};

module.exports = ExtendAllMethodsTest;