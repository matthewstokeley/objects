// @todo
function mapArguments(args) {

	function toArr(value) {
		return value;		
	}

	return mapObject(args, toArr);
}

function example() {
	return mapArguments(arguments);
}
