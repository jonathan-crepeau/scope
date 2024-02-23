// console.log('Fear is the mind killer.');

// ANCHOR - Scope Exercises (SEI)

// SECTION Exercise 1: Define a variable and try to access it from a scope where it CANNOT be accessed:

// {
//   let myName = 'Jonathan';
//   const age = 35;
//   var myLocation = 'California';
// }
// console.log(myLocation);
// console.log(myName);
// console.log(age);


// SECTION Exercise 2: Write a function that returns a variable declared and defined inside of a function -- will it return that value when the function is called?
// NOTE - It will return the value, but you cannot access the variable itself from within the function (see console logs below):

// const getPasta = () => {
//   const pasta = 'Ravioli';
//   return pasta;
// }
// console.log(getPasta());
// console.log(pasta);


// SECTION Exercise 3: Write a for loop but use 'var' instead of 'let'.

// Verify - is the variable accessible outside the loop after it has run?
// NOTE: Yes, returns a value of 10 when you console.log the value of the 'i' variable after the for loop. Returns undefined if you try and log the value of 'i' before the for loop has run.

// Verify: Is the variable accessible outside of the loop when you use var instead of let?
// NOTE Yes.

// Verify: Is the variable accessible outside of the loop with 'let'?
// NOTE No.

// Verify: What about a 'let'-declared variable defined within the block of the loop?
// NOTE No.

// for (var i = 0; i < 10; i++) {
//   console.log('hello');
// }
// console.log(i);

// for (let i = 0; i < 5; i++) {
//   const myName = 'Jonathan'
//   console.log(myName);
// }
// console.log(myName);


// SECTION Exercise 4: Write a function, 'checkSquare', that will return 'true' if a number is a perfect square by checking if the square root is a whole number. Then, write a function, 'checkToLimit', that will loop up to an arbitrary limit brought in as a parameter (ex: 100), and log whether each number is a perfect square. Call upon the the 'checkSquare' function.

// const checkSquare = (num) => {
//   if (Math.sqrt(num) % 1 != 0) {
//     return false;
//   }
//   return true;
// }
// console.log(checkSquare(16))
// console.log(checkSquare(5.22))
// console.log(checkSquare(12.22435));
// console.log(checkSquare(81));

// const checkToLimit = (limitNum) => {
//   for (let i = 0; i <= limitNum; i++) {
//     if (!checkSquare(i)) {
//       console.log(i + ': Not a perfect square.');
//     } else
//     console.log(i + ': A PERFECT SQUARE!');
//   }
// }
// console.log(checkToLimit(100));