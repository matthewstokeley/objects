var is = require('../vendor/validation/src/is');
var __ = require('../dist/objects');
var TestFramework = require('../vendor/tests/src/tester');

function testFunctionOne() {
	console.log('testFunctionOne');
}

function testFunctionTwo() {
	console.log('testFunctionTwo');
}

var testObject = {
	propertyOne: 'propertyOne',
	nestedProperty: {
		singleNesting: 'singleNest',
		anotherNestedProperty: {
			deeplyNestedProperty: 'deeplyNestedProperty'
		}
	}
};

var testObjectUpdated = {
	propertyOne: 'propertyOne',
	nestedProperty: {
		singleNesting: 'singleNest',
		anotherNestedProperty: {
			deeplyNestedProperty: 'deeplyNestedPropertyUpdated'
		}
	}
};

var object = {a: "a", b: "b", c: "c"};

var testClass = function(options) {
	this.options = options;
	console.log(this.options);
};

//testClass.prototype.prop = 'prop';

testClass.prototype.method = function() {
	console.log(this.options);
	console.log('method');
};

testClass.prototype.secondMethod = function() {
	console.log('second method');
};

var method = function method(message) {

	if (!message) {
		console.log('method');
	}

	var string = (message + ' method');
	console.log(string);
	return string;

}

var middleware = function middleware(message) {
	
	if (!message) {
		message = '';
	}

	console.log(this.options);

	var string = (message + ' middleware');

	console.log(string);
	return string;

};

var childTestClass = function() {

};

var options = {
	// assignMethodsToObject: {
	// 	  fn: __.assignMethodsToObject,
	// 	  test: require('./AssignMethodsToObjectTest'),
	// 	  args: [[testFunctionOne, testFunctionTwo], {}]
	// },
	// cloneObject: {
	// 	  fn: __.cloneObject,
	// 	  test: require('./CloneObjectTest'),
	// 	  args: [testObject]
	// },
	// chainMethods: {
	// 	fn: __.chainMethods,
	// 	test: require('./ChainMethodsTest'),
	// 	args: [{functions: [method, middleware], args: 'message' }]
	// },
	// extendAllMethods: {
	// 	fn: __.extendAllMethods,
	// 	test: require('./ExtendAllMethodsTest'),
	// 	args: [testClass, [middleware]]
	// },
	extendNewMethodTest: {
		fn: __.extendNewMethod,
		test: require('./ExtendNewMethodTest'),
		args: []
	},
	extendMethodTest: {
		fn: __.extendMethod,
		test: require('./ExtendMethodTest'),
		args: []
	}
	// initializer: {
	// 	fn: __.initializer,
	// 	test: require('./InitializerTest'),
	// 	args: [{fn: [method, middleware], args: ['message']}]
	// }
	// findIn: {
	// 	fn: __.findIn,
	// 	test: require('./FindInTest'),
	// 	args: ['needle', ['space', 'needle']]
	// },
	// inherit: {
	// 	fn: __.inherit,
	// 	test: require('./InheritTest'),
	// 	args: [testClass, childTestClass]
	// },
	// isArrayTrue: {
	// 	fn: __.isArrayTrue,
	// 	test: require('./IsArrayTrueTest'),
	// 	args: [true, true, false]
	// }
	// arraysToObjectTest: {
	// 	fn: __.arraysToObject,
	// 	test: require('./ArraysToObjectTest'),
	// 	args: [['a', 'b', 'c'], ['a','b','c']]
	// }
	// mapObjectTest: {
	// 	fn: __.mapObject,
	// 	test: require('./MapObjectTest'),
	// 	args: [object, method]
	// }
	// objectToArrayTest: {
	// 	fn: __.objectToArray,
	// 	test: require('./ObjectToArrayTest'),
	// 	args: [object]
	// }
	// removeBlankArraysTest: {
	// 	fn: __.removeBlankArrays,
	// 	test: require('./removeBlankArraysTest'),
	// 	args: [['a', 'b', ['c'], []]]
	// },
	// removeUndefinedTest: {
	// 	fn: __.removeUndefined,
	// 	test: require('./removeUndefinedTest'),
	// 	args: [['a', 'b', 'c', undefined]]
	// },
	// updateObjectPropertiesTest: {
	// 	fn: __.updateObjectProperties,
	// 	test: require('./UpdateObjectPropertiesTest'),
	// 	args: [testObject, testObjectUpdated]
	// },
	// walkObjectTest: {
	// 	fn: __.walkObject,
	// 	test: require('./WalkObjectTest'),
	// 	args: [object, method]
	// }
};


var testFramework = new TestFramework(options)