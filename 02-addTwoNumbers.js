// Challenge: 02-addTwoNumbers
// Difficulty: Basic
// Prompt:
// Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
// If either argument is not a Number, return the value of NaN.
// Examples:
// addTwoNumbers(5, 10) //=> 15
// addTwoNumbers(10, -2) //=> 8
// addTwoNumbers(0, 0) //=> 0
// addTwoNumbers('Hello', 5) //=> NaN

function addTwoNumbers(num1, num2) {
  console.log("working 2");
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return NaN;
  }
}
console.log(addTwoNumbers());
console.log(addTwoNumbers(5, 10));
console.log(addTwoNumbers("Hello", 5));
