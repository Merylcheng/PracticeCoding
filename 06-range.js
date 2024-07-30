// -----------------------------------------------------------------*/
// Challenge: 06-range
// Difficulty: basic
// Prompt:
// - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
// - The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".
// Examples:
// range(1,4) //=> [1,2,3]
// range(-2, 3) //=> [-2,-1,0,1,2]
// range(1,1) //=> []
// range(5,2) //=> "First argument must be less than second"
// -----------------------------------------------------------------*/

//step1: write function consolelog
//step2: initialise empty array
//step3: for loop to iterate
//step4: push to result
//step5: return result

//unsure of 2nd second

function range(start, end) {
  console.log("working");
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(1, 4));
console.log(range(-2, 3));
