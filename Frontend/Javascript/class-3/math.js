// Mathematical Operator:
// let num1 = 5;
// let num2 = 3;
// let result = num1 + num2; // Addition Operator
// let result = num1 - num2; // Subtraction
// let result = num1 * num2; // Multiplication
// let result = num1 / num2; // Division

// Modulo Operator :
// To find out remainder

// let num3 = 29;
// let odd = num3 % 2;
// console.log(odd);

//  Exponentiation Operator

// let square = 2 ** 2;
// let cube = 2 ** 3;
// console.log(square); // 4

// Relational Operator :
// To compare two values
// `!` --> Not Operator
// console.log(10 > 5); // Boolean
// console.log(10 < 5); // Boolean
// console.log(5 >= 5); // Boolean
// console.log(10 > !5); // Boolean
// console.log(!5); // Boolean

// Equality Operator :
// `==` : Value check
// `===` : Value and Data type check

// console.log(5 == 5); // Boolean
// console.log(5 == 6);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != "5");
// console.log(5 !== "5");

// Conditional
// if (condition) {
// true code to be executed here
// }

// Falsy value :
// false, 0, -0, "",``,'', null, undefined, NaN

// if (-0.0512) {
//   console.log("It is true");
// }

// Task-1:
// Given total_bill, discount_start_price if you satisfy the condition Print Discount
// Availaible Otherwise print No Discount

// let total_bill = 750;
// if (total_bill > 500) {
//   console.log("Discount Available");
// } else {
//   console.log("No Discount");
// }

// Task-2 :
// let age = 60;
// if (age >= 60) {
//   console.log("Adult and Senior");
// } else if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// Task-3
// Check if (male) and then check (22+) then he can able to maary

// Check the vowel(a,e,i,o,u)

// let char = "a";

// switch (char) {
//   case "a":
//     console.log("It's vowel");
//     break; // to break the flow
//   case "e":
//     console.log("It's vowel");
//     break;
//   case "i":
//     console.log("It's vowel");
//     break;
//   case "o":
//     console.log("It's vowel");
//     break;
//   case "u":
//     console.log("It's vowel");
//     break;

//   default:
//     console.log("It's not a vowel");
//     break;
// }

// rl module :

const readline = require("readline");
// console.log(readline);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let item1, item2, item3;

rl.question("Enter item1", (input1) => {
  item1 = parseInt(input1);

  if (item1 % 2 !== 0) console.log("This is Odd:", item1);
});
