// Challenge: 01-addOne
// Difficulty: Basic
// Prompt:
// Write a function called addOne that takes a single number as an argument and returns that number plus 1.
// Examples:
// addOne(1) //=> 2
// addOne(-5) //=> -4

//always console.log to make it work first

// step 1:
// function addOne() {
//   console.log("working");
// }

// addOne();

// step 2:
// function addOne(num) {
//   console.log("working");
//   console.log(num);
// }

// addOne(1);

// step 3: this will return nth
// function addOne(num) {
//   console.log("working");
//   console.log(num);
//   return;
// }

// console.log(addOne(1));

//step 4:
// console.log is also a function.
// when there's a function in a function, it will execute the inner one.
// function addOne(num) {
//   console.log("working");
//   console.log(num);
//   return "my return";
// }

// console.log(addOne(1));

function addOne(num) {
  console.log("working");
  return num + 1;
}

addOne();
console.log(addOne(1));
console.log(addOne(-5));
