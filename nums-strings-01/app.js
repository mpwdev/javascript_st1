// sample random min max generator

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(5, 10));

// tagged  templates

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap';
  if (prodPrice > 20) {
    priceCategory = 'fairly priced!';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
  // return {name: productName, price: productPrice};
}

const prodName = 'JS Course';
const prodPrice = 30.33;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

// regular expressions - RegEx

const regex = /^\S+@\S+\.\S+$/;

console.log(regex.test('userInput')); // false
console.log(regex.test('test@mail.com')); // true

const regex2 = /hello/;

console.log(regex2.test('hello brother')); // true
console.log(regex2.test('Hello brother')); // false

const regex3 = /(h|H)ello/;

console.log(regex3.test('hello brother')); // true
console.log(regex3.test('Hello brother')); // true

// Regular Expressions Introduction | REGEX DEMYSTIFIED
// https://youtu.be/0LKdKixl5Ug?list=PL55RiY5tL51ryV3MhCbH8bLl7O_RZGUUE
