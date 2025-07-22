// let str = "apna college";
// console.log(str);
// console.log(str.length);
// console.log(str[0], str[1], str[2]);
// Write a function that takes a string and returns the reversed string

// function reversedString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reversedString("hello")); // Output: "olleh"

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Hello World!"));

//  Check for Palindrome

// function isPalindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return str === reversed;
// }
// console.log(isPalindrome("madam")); // Output: true

// : Write a program that prints numbers from 1 to 20, but:

// If a number is divisible by 3, print "Fizz"

// If a number is divisible by 5, print "Buzz"

// If a number is divisible by both 3 and 5, print "FizzBuzz"

// Otherwise, print the number itself
// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(); // Call the function to execute the FizzBuzz logic
// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();
//  Find the Max Number in an Array
// function findMax(arr) {
//   let max = arr[0]; // Assume the first element is the maximum
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]; // Update max if a larger number is found
//     }
//   }
//   return max; // Return the maximum number found
// }
// console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
// Write a function that counts the number of vowels (a, e, i, o, u) in a string.
// function countVowels(str) {
//   const vowels = "aeiouAEIOU"; // Define vowels in both lowercase and uppercase
//   let count = 0; // Initialize a counter for vowels

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) { // Check if the character is a vowel
//       count++; // Increment the counter if it is a vowel
//     }
//   }

//   return count; // Return the total count of vowels found
// }
// console.log(countVowels("Hello World!")); // Output: 3 (e, o, o)
// *
// **
// ***
// ****
// *****
// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";
//     for (let j = 0; j < i; j++) {
//       stars += "*"; // Append a star for each row
//     }
//     console.log(stars); // Print the stars for the current row
//   }
// }
// printStars(5); // Call the function to print stars in a pyramid pattern

// function print(n) {
//   for (let i = 1; i <= n; i++) {
//     let stars = "";
//     for (let j = 0; j < i; j++) {
//       stars += "x";
//     }
//     console.log(stars);
//   }
// }
// print(5);

function print(n) {
  for (let i = 0; i < n; i++) {
    let stars = "";
    for (let j = 0; j < n - i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

print(5);
