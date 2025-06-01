// Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string
// function countVowels(str) {
//   // Initialize a counter for vowels
//   let count = 0;

//   // Define a string containing all vowels
//   const vowels = "aeiouAEIOU";

//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     // Check if the character is a vowel
//     if (vowels.includes(str[i])) {
//       count++; // Increment the counter if it is a vowel
//     }
//   }

//   // Return the total count of vowels
//   return count;
// }
// console.log(countVowels("Hello World")); // Output: 3

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("gautam"));

// create an arrow function to perform the same task

// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "0" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVowels("gautam"));
