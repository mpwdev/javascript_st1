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

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax; // tax variable accessible from 'parent/main' function
  }

  return calculateTax;
}

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

// preconfigured
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// no need every time set the same tax
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
console.log(calculateIncomeTaxAmount(100));
console.log(calculateIncomeTaxAmount(200));
