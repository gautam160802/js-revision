// // forEach loop in js

// function abc() {
//   console.log("hello");
// }

// function myFunc(abc) {
//   return abc;
// }
// console.log(abc);
// // console.log("HI there");

let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});
