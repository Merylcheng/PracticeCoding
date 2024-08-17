/*-----------------------------------------------------------------
Challenge: 08-removeEnds
Difficulty: Basic
Prompt:
- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.
Examples:
removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

// 1. function
// 2. single str agrument
// 3. return
// 4. first and last character removed
// 5. length of str < 3 return empty

// function removeEnds(str) {
//   console.log("working");
//   console.log(str);
// }

// removeEnds("hello");

// function removeEnds(str) {
//   console.log("working");

//   if (str.length < 3) {
//     return "";
//   }
//   return str.substring(1, 9);
// }

// console.log(removeEnds("SEI Rocks!"));
// console.log(removeEnds("a"));

//Your function is almost correct, but there’s a small issue with how the substring method is used. Specifically, the second argument to substring should be the length of the string minus one (str.length - 1), rather than a fixed number like 9. This way, the function will correctly remove only the first and last characters, regardless of the string's length.

// Issues:
// str.substring(1, 9):
// This code takes a substring from index 1 to index 9. However, if the string is shorter than 9 characters, it might not remove only the last character as intended. It will also not work correctly for strings longer than 9 characters.

// function removeEnds(str) {
//   //   console.log("working");

//   if (str.length < 3) {
//     return "";
//   }
//   return str.substring(1, str.length - 1);
// }

// // Example usage:
// console.log(removeEnds("SEI Rocks!")); // => "EI Rocks"
// console.log(removeEnds("a")); // => "" (empty string)
// console.log(removeEnds("abc")); // => "b"

//MORE IDEAL METHOD IS TO USE SLICE.

function removeEnds(str) {
  // Check if the string length is less than 3
  if (str.length < 3) {
    return ""; // Return an empty string if the condition is met
  }

  // Remove the first and last characters and return the result
  return str.slice(1, -1);
}

// Example usage:
console.log(removeEnds("SEI Rocks!")); // => "EI Rocks"
console.log(removeEnds("a")); // => "" (empty string)
console.log(removeEnds("abc")); // => "b"

//CONCLUSION
//
// The slice method is often considered more ideal than substring for the following reasons:

// 1. Consistency in Handling Negative Indexes:
// slice() supports negative indexes, which allow you to specify positions relative to the end of the string. For example, slice(1, -1) is a concise way to remove the first and last characters.
// substring() does not support negative indexes. If you pass a negative value, it treats it as 0.
//2. More Intuitive Index Handling:
// slice() allows you to specify a range more intuitively. The second parameter is the index where the slice ends (but doesn't include), similar to how array slicing works in many programming languages. This makes it more straightforward when you need to work with parts of the string.
// substring() also excludes the end index, but it doesn’t support negative indexing, and there’s no difference in behavior if the start index is greater than the end index (it just swaps them internally), which can sometimes lead to confusion.
