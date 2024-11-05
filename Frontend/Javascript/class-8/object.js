// Object

// Definition: In JavaScript, an object is a collection of key-value pairs. Each key is a
// unique identifier, and each value can be any data type (string, number, array, function,
// another object).

// Structure: Objects are structured as { key: value } pairs, making them ideal for
// organizing related data.

// Ex:
let person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
};

// Using new Object():

let car = new Object();
car.brand = "Toyota";
car.year = 2020;

// Accessing Properties:
// Dot Notation:
console.log(person.name); // "Alice"

// Bracket Notation:
console.log(person["age"]); // 30

// Example:
// Define a book object and access its properties.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

console.log(book.title); // "To Kill a Mockingbird"
// 3. Adding, Modifying, and Deleting Properties

// Adding Properties:
person.location = "New York";

// Modifying Properties:
person.age = 31;

// Deleting Properties:
delete person.occupation;

// Example:
// Update a library book’s availability status:
book.available = true;
book.available = false; // Changing availability
delete book.year; // Remove publication year

// Nested Objects and Arrays in Objects
// Nested Objects:
// Objects can contain other objects as properties.
let employee = {
  name: "Bob",
  job: {
    title: "Developer",
    department: "IT",
  },
};
console.log(employee.job.title); // "Developer"
