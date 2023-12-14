// sample pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 5)); // 8
console.log(add(10, 20)); // 30

// sample inpure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5)); // new result every time

// side affect - inpure

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // this is side affect
  return sum;
}

console.log(addMoreNumbers(3, 10));

// side affect

const names = ['Bob', 'Kate'];

function printNames(n) {
  n.push('Alen');
  console.log(n);
}

printNames(names); // original array changed - inpure function

// factory function

// function calculateTax(amount, tax) {
//   return amount * tax;
// }

let multiplier = 1.5;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(`multiplier is: ${multiplier}`);
    return amount * tax * multiplier; // tax variable accessible from 'parent/main' function
  }

  return calculateTax;
}

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

// preconfigured
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 2;

// no need every time set the same tax
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
console.log(calculateIncomeTaxAmount(100));
console.log(calculateIncomeTaxAmount(200));

// every function in JS is closure
// scope and lexical environment
// -----------------
// closures samples

let userName = 'Larry';

function greetUser() {
  // let name = userName;
  let name = 'Kate';
  console.log('Hello ' + name);
}

let name = 'Mary';

userName = 'New Larry2';

greetUser(); // function store 'link' to variable and will use the latest value

// function powerOf(x, n) {
// 	let result = 1;

// 	for(let i = 0; i < n; i++) {
// 		// result = result * x;
// 		result *= x;
// 	}

// 	return result;
// }

function powerOf(x, n) {
  // recursion function example
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);

  // return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
  name: 'Bob',
  friends: [
    {
      name: 'Robin',
      friends: [{ name: 'Jon', friends: [{ name: 'Lola' }, { name: 'Tony' }] }],
    },
    { name: 'Kate' },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
