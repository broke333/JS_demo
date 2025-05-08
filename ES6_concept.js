//iterators and generators
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = numbers();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  

//map and set
const map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // "Alice"

const set = new Set([1, 2, 2]);
console.log(set); // Set { 1, 2 }


//for of loop 
const arr=[1,2,3];
for(const num of arr){
    console.log(num); // 1, 2, 3
}


//optional chaining
const obj={person:{name:"alice"}};
console.log(obj?.person?.name); //"alice"
console.log(obj?.address?.street); //undefined


//Nullish Coalescing Operator(??)
// const name = null;
// console.log(name ?? "guest");


// Example: Basic Object Destructuring
const user = { 
  info: { name: 'Alice', age: 30 }, 
  preferences: { theme: 'light' } 
};

const { info: { name: userName, age: userAge }, preferences: { theme } } = user;
console.log(userName, userAge, theme); // Output: Alice 30 light


// spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
// Using spread operator to merge arrays
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);


// symbol
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol("id");
person[id] = 140353;

console.log(person[id]); // Output: 140353
console.log(person.id);  // Output: undefined



///string properties
let text1 = "Hello world, welcome to the universe.";
console.log(text1.startsWith("Hello")); // Output: true

let text2 = "John Doe";
console.log(text2.endsWith("Doe")); // Output: true



const result = Array.from("ABCDEFG");
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']



// Array find()
const numbers = [4, 9, 16, 25, 29]; // Array of numbers

// Use the find method to search for the first value greater than 18
let first = numbers.find(myFunction);

// Callback function that defines the condition
function myFunction(value, index, array) {
  return value > 18; // Condition: value must be greater than 18
}

console.log(first); // Output: 25



// find index
const numbers = [4, 9, 16, 25, 29]; // Array of numbers

// Use the findIndex method to find the index of the first value greater than 18
let first = numbers.findIndex(myFunction);

// Callback function that defines the condition
function myFunction(value, index, array) {
  return value > 18; // Condition: value must be greater than 18
}

console.log(first); // Output: 3


// isFinite()
isFinite(10/0);       // returns false
isFinite(10/1); 


// isNaN()
isNaN("Hello"); // returns true


// math functions
Math.trunc(4.9); // returns 4
Math.sign(-4); // returns -1
Math.cbrt(8); // returns 2
Math.log2(2);    // returns 1
Math.log10(10);    // returns 1


// Number.EPSILON
let a = 0.1 + 0.2; // Floating-point precision issue
let b = 0.3;

console.log(a === b); // Output: false
console.log(Math.abs(a - b) < Number.EPSILON); // Output: true


// Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

let num = Number.MIN_SAFE_INTEGER - 1;
console.log(num === Number.MIN_SAFE_INTEGER); // Output: true (unsafe comparison due to precision loss)



// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

let num = Number.MAX_SAFE_INTEGER + 1;
console.log(num === Number.MAX_SAFE_INTEGER); // Output: true (unsafe comparison due to precision loss)
