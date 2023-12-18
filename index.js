// Question no. 1 : Interview Question: Asynchronous JavaScript with Promises
// Context
// You need to work with asynchronous operations in JavaScript using Promises.
// Task
// Write a JavaScript function named fetchUserData that simulates fetching user data from a server. The function should return a Promise. If the fetching operation is successful, the Promise resolves with an object { name: "Alice", age: 30 }. If there's an error, it rejects with the message "Error fetching data".
// Requirements
// Use setTimeout to simulate the delay in fetching data.
// Handle both resolve and reject scenarios in your implementation.
// Example
// javascript
// fetchUserData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// solution for question 1 : 

function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const result = true;
            if(result){
                res({name:"Alice", age:30});
            }else{
                rej("Error fetching data")
            }
        },1000)
    })
}

fetchUserData()
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

// another examle of promise checking square is correct or not

function checkSquare(num){
    return new Promise((res,rej)=>{
        const square = num * num;
        if(square === 16){
            res("square is correct")
        }else{
            rej("square is not correct")
        }
    })
}

let numb = 4;
checkSquare(numb)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))



// Question no. 2 : Interview Question: JavaScript Closure
// Context
// Closures in JavaScript are a powerful feature to retain access to an outer function’s scope.
// Task
// Write a JavaScript function createCounter that uses closure to create a private variable count. The createCounter function should return an object with two methods: increment which increases count by 1, and getValue which returns the current count.
// Requirements
// count should not be accessible directly from outside the function.
// Example
// javascript
// let counter = createCounter();
// counter.increment();
// console.log(counter.getValue()); // Expected Output: 1

// solution for question no : 2
function createCounter(){
    let count = 0;
    return{
        increment : function(){
            count++;
        },
        getValue : function(){
            return count;
        }
    }
}

let counter = createCounter();
counter.increment();
console.log(counter.getValue())

// Question no. 3 :
// Interview Question: JavaScript Array Methods
// Context
// Manipulating arrays is a common task in JavaScript.
// Task
// Write a JavaScript function filterAndMap that takes an array of numbers. The function should first filter out all numbers less than 10, and then map the remaining numbers to their square roots.
// Requirements
// Use array methods filter and map.
// Example
// javascript
// let result = filterAndMap([4, 10, 16, 25]);
// console.log(result); // Expected Output: [3.1622776601683795, 5]

// Solution for Question 3 : 
let num = [4,10,16,25];
function filterAndMap(num){
    return num.filter((el)=>el < 10).map((el)=>Math.sqrt(el))
}

let res = filterAndMap(num);
console.log(res);

// Question no . 4 : 
// Interview Question: JavaScript Object Destructuring
// Context
// Object destructuring is a convenient way to extract values from objects.
// Task
// Write a JavaScript function displayUser that takes an object with properties name, age, and email. The function should use object destructuring to extract these properties and return a string in the format "Name: [name], Age: [age], Email: [email]".
// Requirements
// Use object destructuring to access object properties.
// Example
// javascript
// let user = { name: "Bob", age: 28, email: "bob@example.com" };
// console.log(displayUser(user)); // Expected Output: "Name: Bob, Age: 28, Email: bob@example.com"

// Solution
let user = { name: "Bob", age: 28, email: "bob@example.com" };

function displayUser(obj){
    const {name , age , email} = obj;
    return `Name: ${name}, Age: ${age} , Email: ${email}`
}

console.log(displayUser(user))

// Question no. 5 :
// Interview Question: JavaScript this Keyword
// Context
// Understanding the this keyword in JavaScript is crucial for many coding scenarios.
// Task
// Explain with examples how the this keyword works in JavaScript, particularly in the context of an object method, a standalone function, and an arrow function.
// Requirements
// Provide code examples demonstrating different behaviors of this.

// Solution :
// 1.In the context of an object method
const person = {
    name: "Asif",
    greet: function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };
  
  person.greet();


// 2.In a standalone function
function showName() {
    console.log(`Hello, I'm ${this.name}`);
  }
  
  const name = "Asif";
  showName();

//   3.Arrow functions 

function PersonAgain(name) {
    this.name = name;
    this.greet = () => {
      console.log(`Hello, I'm ${this.name}`);
    };
  }
  
  const newname = new PersonAgain("Asif");
  const greet = newname.greet;
  greet(); 


