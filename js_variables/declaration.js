// using var
var age = 25;  // Declare a variable
console.log(age);  // Output: 25

age = 30;  // Reassign the value
console.log(age);  // Output: 30

// using let
let name = "Alice";  // Declare a variable
console.log(name);  // Output: Alice

name = "Bob";  // Reassign the value
console.log(name);  // Output: Bob

// Block scope
if (true) {
  let greeting = "Hello!";
  console.log(greeting);  // Output: Hello!
}
// console.log(greeting);  // Error: greeting is not defined


//using const
const pi = 3.14;  // Declare a constant
console.log(pi);  // Output: 3.14

// pi = 3.14159;  // Error: Assignment to constant variable

// Modifying object properties
const person = { name: "Alice" };
person.name = "Bob";  // Allowed
console.log(person.name);  // Output: Bob
