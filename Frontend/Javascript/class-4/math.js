// Math in Javascript
// Math is an in-built mathematical operation in JS.

let num1 = 25;
let num2 = 55.05;

// let addition = num1 + num2;
// console.log(addition); // 80.05

// Round
// console.log(Math.round(addition)); // 80
// console.log(Math.round(12.000012));
// console.log(Math.PI); // 3.141592653589793

// Square root
// console.log(num1 ** 2); //625 (Pow)
// console.log(num1 ** 3);
// console.log(Math.pow(35, 2)); // 1225
// console.log(Math.pow(5, 3)); // 125
// console.log(Math.sqrt(16)); // Square root

// Ceil
// console.log(Math.ceil(98.75)); // 99

// Floor
// console.log(Math.floor(98.75)); // 98

// console.log(Math.ceil(325.49)); // 326
// console.log(Math.floor(325.49)); // 325
// console.log(Math.ceil(325.01));
// console.log(Math.floor(325.01));

// console.log(Math.round(325.4)); // 325
// console.log(Math.round(325.5)); // 326
// console.log(Math.round(325.8)); // 326

// Max
// console.log(Math.max(10, 20, 30, 40, 50)); // 50
// Min
// console.log(Math.min(10, 20, 30, 40, 50)); // 10

// Absolute
// console.log(Math.abs(-10)); // 10
// console.log(Math.abs(-0.00005)); // 0.00005

// Random(0 to 1)
// console.log(Math.random()); // 0.721127982167951
// console.log(Math.random()); // 0.5154888882259359
// console.log(Math.random()); // 0.7846246321547545
// console.log(Math.random()); // 0.491139939685991

// Write a program to print the random numbers between 5 to 27
let start = 5;
let end = 27;
// ((end - start)+1) -> To find out the numbers
let totalNumbers = end - start + 1; // 23
// console.log(Math.random() * totalNumbers); // 9.688561790447048 ( 0 to 23)
// console.log(Math.random() * totalNumbers); // 4.376674485394604
// console.log(Math.random() * totalNumbers); // 12.360215644092321
// 5 to 27

// let random_number = Math.floor(Math.random() * totalNumbers + start);
// console.log(random_number);

// Dates
// To create date object

let date = new Date();
console.log(date); // 2024-10-15T05:42:08.736Z(UTC/ISO)
console.log(date.toISOString()); // 2024-10-15T05:42:

console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 9 (it should be 10)
console.log(date.getMonth() + 1); // 10 --> October
console.log(date.getDate()); // 15
console.log(date.getHours()); // 11
console.log(date.getMinutes()); // 19
console.log(date.getSeconds()); // 0
console.log(date.getDay()); // 2 --> Tuesday
