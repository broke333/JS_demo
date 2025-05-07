//lexical Scope
function outerFunction() {
    const outerVariable = 'I am from outer scope';
  
    function innerFunction() {
      console.log(outerVariable); // Inner function accesses the outer variable
    }
  
    innerFunction();
  }
  
  outerFunction(); // Logs: 'I am from outer scope'
  


//closures
function outerFunction() {
    let count = 0;
  
    return function increment() {
      count++;
      return count;
    };
  }
  


//   this keyword
  const counter = outerFunction(); // Outer scope is captured
  console.log(counter()); // 1
  console.log(counter()); // 2
  
  const obj = {
    name: 'Alice',
    greet: function () {
      console.log(this.name); // Refers to obj
    },
  };
  
  obj.greet(); // Logs: 'Alice'
  


//   explicit binding
function greet() {
    console.log(this.name);
  }
  
  const person = { name: 'Alice' };
  
  greet.call(person); // Logs: 'Alice' (explicitly sets `this` to `person`)
  greet.apply(person); // Logs: 'Alice'
  
  const boundGreet = greet.bind(person);
  boundGreet(); // Logs: 'Alice'

  // this keyword in a function
  function showThis() {
    console.log(this); // In non-strict mode: global object, in strict mode: undefined
  }
  
  showThis();
  


//This with Arrow Functions
  const obj1 = {
    name: 'Alice',
    greet: () => {
      console.log(this.name); // Inherits `this` from the outer scope (global scope)
    },
  };
  
  obj.greet(); // Logs: undefined (or global scope value)



  //This with eventhandlers
  const button = document.querySelector('button');

const user = {
  name: 'Alice',
  showName: function () {
    console.log(`User: ${this.name}`);
  },
};

button.addEventListener('click', user.showName.bind(user)); // Ensures `this` refers to `user`

//This keyword Alone
console.log(this); // In a browser, logs: Window



  

//SetTimeout
const Timerid=setTimeout(()=>{
    console.log("this will not run");
},5000)
clearTimeout(Timerid); // This will prevent the timeout from executing

// SetInterval
const intervalId = setInterval(() => {
    console.log('This will stop after 5 seconds.');
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId); // Stops the interval after 5 seconds
  }, 5000);

  
//callback
  function fetchData(callback) {
    const error = null; // Simulate no error
    const data = { id: 1, name: 'Alice' };
  
    setTimeout(() => {
      callback(error, data); // Pass error and data to the callback
    }, 1000);
  }

  fetchData((err,result)=>{
    if(err){
        console.error('error fetching data',err);
    }else{
        console.log('data fetched',result);
    }
  });

  //Callback Hell
  setTimeout(()=>{
    console.log('step 1');
    setTimeout(() => {
        console.log('Step 2');
        setTimeout(() => {
          console.log('Step 3');
        }, 1000);
      }, 1000);
  },1000);


//promises
new Promise((resolve, reject) => {
    setTimeout(() => reject('something went wrong'), 1000);
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.error(error); // Logs: "Something went wrong!"
});

// async/await
async function fetchDataAsync() {
    try {
      const data = await fetchData(); // Waits for the Promise to resolve
      console.log(data); // Logs: "Data fetched!" after 2 seconds
    } catch (error) {
      console.error(error); // Handles any errors
    }
  }
  
  fetchDataAsync();

  
  // async/await 
  async function riskyOperation() {
    try {
      const result = await new Promise((_, reject) => {
        setTimeout(() => reject('Something went wrong!'), 1000);
      });
      console.log(result);
    } catch (error) {
      console.error('Error:', error); // Logs: "Error: Something went wrong!"
    }
  }