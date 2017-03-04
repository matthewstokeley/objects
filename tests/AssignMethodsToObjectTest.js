var AssignMethodsToObjectTest = function AssignMethodsToObjectTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);

};

AssignMethodsToObjectTest.prototype.test = function() {

	if (!this.result) {
		return false;
	}

	if (typeof this.result !== 'object') {
		console.log('assign methods to object must return an object');
		return false;
	}

	var results = [];
	// @todo map
	for (var i = 0; i < this.args[0].length; i++) {
		results.push(this.result[this.args[0][i].name] === this.args[0][i] ? true : 'error: ' + this.args[0][i].name);
	}

	for (var i = 0; i < results.length; i++) {
		if (results[i] !== true) {
			console.log(results[i])
			return false;
		}
	}

	return true;
};

module.exports = AssignMethodsToObjectTest;