/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/

//STEP 1: CONSOLELOG MAKE SURE YOUR FUNCTION IS WORKING
//STEP2: PUT ARRAY IN BRACKET
//STEP3: SEARCH WHICH METHOD YOU WANT TO USE > FOR LOOP OR REDUCE?
//CONSOLE LOG TEST

// function sumNumbers() {
//   console.log("working");
// }

function sumNumbers(arrayOfNumbers) {
  console.log("working");
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}

console.log(sumNumbers([10]));
console.log(sumNumbers([]));
