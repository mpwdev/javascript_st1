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
