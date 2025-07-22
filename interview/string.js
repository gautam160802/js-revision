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
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();
