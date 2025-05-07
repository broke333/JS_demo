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
