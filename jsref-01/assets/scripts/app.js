// const hobbies = ['Sports', 'Cooking', 'Reading'];

// console.log(hobbies);

// hobbies.push('working');
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === 'Sports';
// });

// const index = hobbies.findIndex(item => item === 'Sports');

// console.log(index);
// console.log(hobbies[index]);

// const editedHobbies = hobbies.map((item) => {
//   return item + '!';
// });

// const editedHobbies2 = hobbies.map((item) => {
//   return { text: item };
// });

// console.log(hobbies);
// console.log(editedHobbies);
// console.log(editedHobbies2);

// function transformToObjects(numberArray) {
// 	return numberArray.map((item) => {
// 		return { val: item }
// 	})
// }

// const newArray = transformToObjects([1, 2, 3]);
// console.log(newArray);

// //
// const prices = [1, 2, 3, 4, 5];
// const tax = 10;

// const newPrices = prices.map((price) => {
//  const aa = { 'newPrice': price * tax };
//  return aa;
// });

// console.log(prices, newPrices);

// const [firstName, lastName] = ['Bob', 'Dilan'];

// console.log(firstName);
// console.log(lastName);

// function greetUser({ name, age }) {
//   console.log(`Hello, ${name}. You are ${age} years old.`);
// }

// greetUser({ name: 'Bob', age: 19 }); // returns - Hello, Bob. You are 19 years old.

// const hobbies = ['sports', 'music'];
// const newHobbies = ['drive'];

// const mergedHobbies = [...hobbies, ...newHobbies];

// console.log(hobbies);
// hobbies.push('cooking');

// console.log(mergedHobbies); // new array

// const user = {
// 	name: 'Bob',
// 	age: 33
// };

// const extendedUser = {
// 	isAdmin: true,
// 	...user
// };

// console.log(extendedUser);

// const hobbies = ['sports', 'music'];

// for ( const hobby of hobbies) {
// 	console.log(hobby);
// }

// function handleTimeout() {
//   console.log('Timed out');
// }

// const handleTimeout2 = () => {
//   console.log('Timed out 2 .... again');
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log('more timing out ...');
// }, 4000);


// function greeter(greetFn) {
// 	greetFn();
// }

// // greeter(() => console.log('Hi'));

// function init() {
// 	function greet() {
// 		console.log('Hi Max from greet fn');
// 	}

// 	greet();
// }

// init();