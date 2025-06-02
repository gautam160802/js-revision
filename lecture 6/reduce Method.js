// reduce methods
// performs some operations & reduces the array to a single value. It returns that single value.
// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);

let arr = [4, 6, 8, 2, 111, 77];

const output = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(output);
