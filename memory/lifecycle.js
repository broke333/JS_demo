// reachability
let obj = { name: "Alice" }; // Reachable object
obj = null; // Unreachable; ready for garbage collection



// forgotten timers and callbacks
let obj1 = { name: "Alice" };
setInterval(() => console.log(obj), 1000); // Memory leak if 'obj' is no longer needed


// detached dom nodes
// let div = document.createElement('div');
// document.body.appendChild(div);
// document.body.removeChild(div); 
// 'div' still exists in memory if referenced


// circular refrence
function createCircular() {
    let obj1 = {};
    let obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;
  }
  createCircular(); // Both objects will be garbage collected when out of scope
  

//   uncleared event listeners
// const button = document.querySelector('button');
// function handleClick() {
//   console.log('Clicked');
// }
// button.addEventListener('click', handleClick);
// Always remove listeners if not needed
// button.removeEventListener('click', handleClick);



//global variables or closures holding reference
let data = { large: 'some data' };
function closure() {
  return data;
}
// 'data' remains in memory as long as 'closure' exists
