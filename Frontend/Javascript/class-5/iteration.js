// Iteration :

// Print from 1 to 10;
// let start_num = 1;
// let next_num1 = start_num + 1;
// let next_num2 = start_num + 1;
// let end_num = 10;
// console.log(start_num);
// console.log(end_num);
// console.log(next_num2);
// let num = 2;
// console.log(num);
// console.log(num);
// console.log(num);

// While loop :

// syntax:
// while (condition) {
// code to be executed
// }

// Ex: Print from 1 to 10;

// let num = 1; // declartion
// console.log("Global:", num); // print 1

// while (num <= 10) {
//   console.log("Block:", num); // print
//   num++;
// }

// console.log("Global:", num); // print 11

// Do .. while loop :
// syntax :
// do {
// code to be executed
// } while(condition)

// Ex: Asking for user to the correct input

// let userAns;

// do {
//   userAns = prompt("What is the capital of Odisha?");
//   console.log("Wrong");
// } while (userAns !== "Bhubaneswar");

// console.log("Correct");

// console.log("Bhubanewsar" !== "Bhubanewsar"); // true

// For Loops

// todo Generate random number and add them upto 5 times

let sum = 0;
for (let i = 0; i <= 5; i++) {
  let random = Math.floor(Math.random() * 10);
  let result = sum + random;
  console.log(`The random sum result is ${result}`);
}

// Nested Loops
// A loop inside an another loop that is basically called nested loops.

// Example:
// Syntax :

// for (initialization; condition; increment/decrement) {
// code to be executed
//   for (initialization; condition; increment/decrement) {
// code to be executed
//   }
//   }

// Examples:
// Pattern printing
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
