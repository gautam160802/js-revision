// // arrow functions study
// const add = (a, b) => a + b;
// const greet = (name) => `Hello, ${name}!`;
// const square = (x) => x * x;
// // now print the results

// console.log(add(5, 10));
// console.log(greet("Gautam"));
// console.log(square(5));

// // Arrow functions can also be used for single-line functions without curly braces

// const isEven = (num) => num % 2 === 0;
// const double = (x) => x * 2;
// const numbers = [1, 2, 3, 4, 5];

// // now print the results
// console.log(isEven(4));

// console.log(double(10));
// // what is the meaning of this const numbers = [1, 2, 3, 4, 5];
// // it is an array of numbers
// // we can use arrow functions with array methods like map, filter, and reduce
// const doubledNumbers = numbers.map(double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const arrowSum = (a, b) => {
//   return a + b;
// };
// const Sum = arrowSum(5, 10);
// console.log(Sum);

// const mull = (a, b) => {
//   return a * b;
// };
// const product = mull(5, 10);
// console.log(product);

const arrowMull = (a, b) => {
  console.log(a * b);
};
