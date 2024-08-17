// Challenge: 07-reverseUpcaseString
// Difficulty: Basic
// Prompt:
// - Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
// Examples:
// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES"
// -----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

// step 1: test

// function reverseUpcaseString() {
//   console.log("working");
// }

// reverseUpcaseString();

//step2: what is a single string agrument
// The StringArgument class is used to represent a single word. These words can only contain alphanumeric characters (A-Z, a-z and 0-9), and the underscore character.

// function reverseUpcaseString(str) {
//   console.log("working");
//   const strRev = str.split("").reverse().join("").toUpperCase();
//   console.log(strRev);
// }

// reverseUpcaseString("SEI Rocks!");

//you will also get the answer from the above code but is it not right
// pls include return

function reverseUpcaseString(str) {
  console.log("working");
  return str.split("").reverse().join("").toUpperCase();
}

console.log(reverseUpcaseString("SEI Rocks!"));

//conclusion why the first answer is almost correct but missing return and why is it wrong
// What the Code Does:
// console.log("working");:

// This prints "working" to the console, which is useful for debugging to confirm that the function is being executed.
// const strRev = str.split("").reverse().join("").toUpperCase();:

// This line correctly performs the operations to split, reverse, join, and convert the string to uppercase, storing the result in the strRev variable.
// console.log(strRev);:

// This prints the reversed and uppercased string to the console, which is useful for verifying the output.
// What’s Missing:
// The function currently only prints the result to the console but doesn’t return the final string, meaning the result can't be used elsewhere in the code.

// What This Does Now:
// return strRev;: The function now returns the reversed and uppercased string, allowing you to use the result outside the function.
// console.log(result);: This line will print "!SKCOR IES", which is the final result returned by the function.
// So now, not only does your function print out debug information, but it also correctly returns the processed string.

// function reverseUpcaseString(str) {
//     console.log("working"); // Debugging message
//     const strRev = str.split("").reverse().join("").toUpperCase();
//     console.log(strRev); // Debugging output
//     return strRev; // Return the final result
//   }

//   // Example usage:
//   const result = reverseUpcaseString("SEI Rocks!");
//   console.log(result); // This will print: "!SKCOR IES"

//WHY IS RETURN IMPORTANT?
// The function currently only prints the result to the console but doesn’t return the final string, meaning the result can't be used elsewhere in the code.
