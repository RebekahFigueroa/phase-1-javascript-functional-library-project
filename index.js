function myEach(collection, callback) {
	let array = collection;
	if (!Array.isArray(array)) {
		array = Object.values(array);
	}
	array.forEach((element) => {
		callback(element);
	});
	return collection;
}

function myMap(collection, callback) {
	const array = [
		...(!Array.isArray(collection) ? Object.values(collection) : collection),
	];
	const map = array.map((element) => callback(element));
	return map;
}

function myReduce(collection, callback, acc) {
	const array = [
		...(!Array.isArray(collection) ? Object.values(collection) : collection),
	];

	acc = acc === undefined ? array[0] : acc;

	console.log(array, acc);

	return array.reduce((acc, val, collection) => {
		return callback(acc, val, collection);
	}, acc);
}

function myFind(collection, predicate) {
	const array = [
		...(!Array.isArray(collection) ? Object.values(collection) : collection),
	];

	return array.find(predicate);
}

function myFilter(collection, predicate) {
	const array = [
		...(!Array.isArray(collection) ? Object.values(collection) : collection),
	];
	return array.filter(predicate);
}

function mySize(collection) {
	const array = [
		...(!Array.isArray(collection) ? Object.values(collection) : collection),
	];
	return array.length;
}

function myFirst(array, n) {
	return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
	return n === undefined
		? array[array.length - 1]
		: array.slice(array.length - n);
}

function myKeys(object) {
	return Object.keys(object);
}

function myValues(object) {
	return Object.values(object);
}
