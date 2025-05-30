// string in js
// create a string

// let str = "Hello World!";

// // string length
// let strLength = str.length;
// // string indeices

// let firstChar = str[0];
// let lastchar = str[str.length - 1];

// console.log("string length:", strLength);
// console.log(firstChar);
// console.log(lastchar);

// template literals in js:
// let name = "Gautam";
// let age = 20;
// let str = `My name is ${name} and age is ${age}.`;
// console.log(str);

// string interpolation
// to create strings by doing substitutions of placeholders

// let str = "Hello World!";
// let str2 = str.replace("World", "Gautam");
// console.log(str2);

// let str = "Hello$world";
// let str2 = str.toUpperCase();
// console.log(str2);
// let str3 = str.toLowerCase();
// console.log(str3);

// let str4 = str.slice(5, 7);
// console.log(str4);
// let str5 = str.slice(6);
// console.log(str5);

// string methods
let str = "Hello World!";
let str2 = str.split(" "); // split the string into an array of substrings
console.log(str2); // ["Hello", "World!"]
let str3 = str.split(""); // split the string into an array of characters
console.log(str3); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]
let str4 = str.split("o"); // split the string into an array of substrings using "o" as the delimiter
console.log(str4); // ["Hell", " W", "rld!"]
let str5 = str.split("o", 1); // split the string into an array of substrings using "o" as the delimiter and limit the number of substrings to 1
console.log(str5); // ["Hell"]
let str6 = str.split("o", 2); // split the string into an array of substrings using "o" as the delimiter and limit the number of substrings to 2
console.log(str6); // ["Hell", " W"]
