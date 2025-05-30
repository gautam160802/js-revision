// array method in js
// Array methods in JavaScript provide a way to manipulate and interact with arrays. Here are some common array methods and their usage:
// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
// 2. pop(): Removes the last element from an array and returns that element. This method changes the length of the array.
// 3. shift(): Removes the first element from an array and returns that element. This method changes the length of the array.
// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// 5. toString(): Converts an array to a string, with elements separated by commas.
// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// 6. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// concat(): Merges two or more arrays and returns a new array.
// give an example of each method
//  toString(): Converts an array to a string, with elements separated by commas.
let arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); // Output: "1,2,3,4,5"
// concat(): Merges two or more arrays and returns a new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedArray = arr.slice(1, 4); // Slices from index 1 to index 4 (not including 4)
console.log(slicedArray); // Output: [2, 3, 4]
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1, 6); // Removes 1 element at index 2 and adds 6
console.log(spliceArray); // Output: [1, 2, 6, 4, 5]
