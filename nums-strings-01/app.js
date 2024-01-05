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
