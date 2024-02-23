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


