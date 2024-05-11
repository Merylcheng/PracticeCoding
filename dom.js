// - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.
// Examples:
// removeEnds('SEI Rocks!'); //=> "EI Rocks"
// removeEnds('a'); //=> "" (empty string)

// function removeEnds(a) {
//   const string = a.split("");
//   let newString;
//   if (string.length < 3) {
//     return "";
//   } else {
//     newString = string.slice(1, string.length - 1);
//   }
//   return newString.join("");
// }
// console.log(removeEnds("SEI Rocks!"));

/*-----------------------------------------------------------------
Challenge: 10-formatWithPadding
Difficulty: Basic
Prompt:
- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.
Examples:
formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

// const formatWithPadding (num, char, length) => {

// const numStr = num + ""

// if (numStr.length > length)
//  {
//     return numStr
//  }
//  let front = ""
//  const x =length -numStr.length
//  for (let i = 0; i < x; i++) {
//     front +-char}

//  }

//  return front + numStr

// console.log (formatWithPadding(123, '0', 5));
// console.log (formatWithPadding (42, '*', 10))
// console.log (formatWithPadding (1234, '*', 3))

/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// addTwoNumbers(5, 10);

// console.log(addTwoNumbers(5, 10));

//    Challenge: 17-mapArray
// Difficulty:  Intermediate
// Prompt:
// The goal is of this challenge is to write a function that performs the functionality
// of JavaScript's Array.prototype.map method.
// - Write a function named mapArray that accepts two arguments: a single array and
//   a callback function.
// - The mapArray function should return a new array of the same length as the array argument.
// - The mapArray function should iterate over each element in the array (first arg).
//   For each iteration, invoke the callback function (2nd arg), passing to it as arguments,
//   the current element and its index.  Whatever is returned by the callback function should
//   be included in the new array at the index of the current iteration.

//iterate over each element means loop through
//invoke means do a callback. During each iteration, the mapArray function should call the callback function provided as the second argument.

// Examples: mapArray([1, 2, 3], function (n) {
//   return n * 2;
// });
//=> [2, 4, 6]  (a new array)
// mapArray(["rose", "tulip", "daisy"], function (f, i) {
//   return `${i + 1} - ${f}`;
// });
//=> ["1 - rose", "2 - tulip", "3 - daisy"]

//Passing Arguments to the Callback Function:
// Two arguments are passed to the callback function:
// The current element (array[i]): This is the element from the input array that is currently being processed within the loop.
// The index of the current element (i): This is the position of the current element within the array.

// function mapArray(arr, callback) {
//   let newArrLength = arr.length;
//   let element = [];
//   for (let i = 0; i < newArrLength; i++) {
//     const x = callback(arr[i], i);
//     element.push(x);
//   }
//   return element;
// }
// console.log(
//   mapArray(["rose", "tulip", "daisy"], function (f, i) {
//     return `${i + 1} - ${f}`;
//   })
// );

// - Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
// - A flattened array is an array that contains no nested arrays.
// - Arrays maybe nested at any level.
// - If any of the arrays have duplicate values those duplicate values should be present in the returned array.
// - The values in the new array should maintain their ordering as shown in the examples below.
// Hint:
// - This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
// Examples: flatten([1, [2, 3]]);
//=> [1, 2, 3]  (a new array)
// flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]]);
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']

//how to sum the number in the array?
//need to push back into new array
//function invoke, arg, return
//Array.isArray(item));
//recursion (...flatten(arr[i]))

// function flatten(arr) {
//   const newFlatten = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (Array.isArray(arr[i])) {
//       newFlatten.push(...flatten(arr[i]));
//     } else {
//       newFlatten.push(arr[i]);
//     }
//   }
//   return newFlatten;
// }
// console.log(flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]]));

// Prime N

// function isPrime(number) {

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//           return false;
//       }
//   }
//   return true;
// }

//next dallies

// const primeFactors = (num) => {
//   const result = []

//   if (num < 2 || isNotWholeNumber(num)) {
//     return ["?"]
//   }

//   let start = 2
//   let curentNum =num
// }

// Challenge: 01-addOne
// Difficulty: Basic
// Prompt:
// Write a function called addOne that takes a single number as an argument and returns that number plus 1.
// Examples:
// addOne(1) //=> 2
// addOne(-5) //=> -4

//always console.log to check if its working

// function addOne(num) {
//   console.log("working");
// }
// addOne();

function addOne(num) {
  console.log("working");
  return num + 1;
}

addOne();
console.log(addOne(1));
console.log(addOne(-5));
