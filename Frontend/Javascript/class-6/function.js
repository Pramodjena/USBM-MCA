// Function

// Function is  a resuable block of code to perform some certain task.

// todo print your name

// function printName() {
//   console.log(`My name is Pramod`);
// }

// printName(); // Invokation or function call

// Return keyword
// console.log(printName("Pramod", 25, "BBSR"));
// function printName(name, age, city) {
//   return `My name is ${name},${age},${city}`; // stop
//   console.log("I am stop here");
// }

// console.log(printName("Pramod", 25, "BBSR")); // Invokation or function call

// Example-1 :

// const greeting = (name, hour) => {
//   if (hour < 12) {
//     return `Good Morning ${name}`;
//   } else if (hour < 18) {
//     return `Good Afternoon ${name}`;
//   } else {
//     return `Good Evening ${name}`;
//   }
// };

// const output = greeting("Pramod", 10);
// console.log(output); // Output: Good Morning Pramod

// Example-2 :

// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//       break;
//     case "-":
//       return a - b;
//       break;
//     case "*":
//       return a * b;
//       break;
//     case "/":
//       return a / b;
//       break;

//     default:
//       return "Invalid operator";
//       break;
//   }
// };

// const output = calculator(10, 5, "+");
// console.log(output); // Output: 15

// Example-3 :

// const add = (a, b) => console.log(add(5, 7));
// add()

// const add = (a, b) =>{ 
//    return a + b
// };
// console.log(add(5, 8));
