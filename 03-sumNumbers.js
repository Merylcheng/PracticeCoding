// Challenge: 03-sumNumbers
// Difficulty: Basic
// Prompt:
// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).
// Examples:
// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0
// ------------------------------

function sumNumbers(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log("Add", arr[i]);
    sum += arr[i];
  }
  return sum;
}

console.log(sumNumbers([5, 10]));
console.log(sumNumbers([]));

// sum += arr[i]; is the same as sum = i0+ i1+ i2+ i3
// return sum but sum is not defined,
//let sum =0. if your sum has a value, it will add to the array results

// console.log(arr[i]); arr[i] is an array value
