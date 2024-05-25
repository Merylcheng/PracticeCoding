/*-----------------------------------------------------------------
Challenge: 22-intersection
Difficulty: Intermediate
Prompt:
- Write a function named intersection that accepts two arguments which are both arrays.  
The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common,  the intersection function should return an empty array.
- The function should not mutate (change) either argument.
Examples:
intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------*/
// Your solution for 22-intersection here:

//objective: find the same element and return it if there is.
//return a new array containing all elements in common, including repeating element values. .push
// If there are no elements in the arrays in common,  the intersection function should return an empty array. if else
//for loop to check
//if else
//return empty array

//

function intersection(arr1, arr2) {
  console.log(arr1, arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length === arr2) {
    }
  }
}

intersection(["a", 1], []);

// do i have to do anything if arg contains a mixture of strings booleans etc

// https://lodash.com/docs/
