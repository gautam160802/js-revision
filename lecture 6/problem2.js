// We are given array of marks of students. Filter out marks of students that scored 90+.
let arr = [90, 97, 88, 89, 80, 95];

let result = arr.filter((val) => {
  return val > 90;
});
console.log(result);
