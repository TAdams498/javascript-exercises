const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((prev, next) => prev + next, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((prev, next) => prev * next, 1);
};

const power = function(num, exp) {
	let numbers = [];
	for (let i = 0; i < exp; i++) {
		numbers.push(num);
	}
	return numbers.reduce((prev, next) => prev * next, 1);
};

const factorial = function(fact) {
	let numbers = []
	for (let i = 1; i < fact + 1; i++) {
		numbers.push(i);
	}
	return numbers.reduce((prev, next) => prev * next, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
