// Map mehtod
// creates a new array with the results of some operation. The value its callback returns are used to form new array

let nums = [67, 52, 39];
// console.log(nums);

let newArr = nums.map((val) => {
  return val % 2;
});

console.log(newArr);

// let calcSquare = (nums) => {
//   //
//   para = nums * nums;
// };

// console.log(para);
