// filter - Array Methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenArr = arr.filter((val) => {
  return val % 2 !== 0;
});
console.log(evenArr);
