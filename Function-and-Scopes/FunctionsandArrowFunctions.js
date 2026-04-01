/******************************************************
 * ⚙️ FUNCTIONS & ARROW FUNCTIONS (WITH WHY EXPLANATIONS)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Functions = reusable blocks of code

Types:
1. Function Declaration
2. Function Expression
3. Arrow Function

Key Differences:
- Arrow functions → no own "this"
- Arrow functions → no "arguments"
- Declarations are hoisted
*/


/*
==================================================
🧠 FUNCTION DECLARATION
==================================================
*/
function greet(name){
    return "HEllO"+name;
}
console.log(greet("HASSAN"));
// "Hello Hassan" → WHY?
// function executes → returns string


/*
🔥 HOISTING BEHAVIOR
*/

sayHi();  
function sayHi() {
  console.log("Hi");
};

// "Hi" → WHY?
// function declaration is hoisted → available before definition


//
// ==================================================
// 📌 FUNCTION EXPRESSION
// ==================================================
// //

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));
// 5 → WHY?
// function stored in variable → then executed
/*
🔥 NOT HOISTED
*/

// test(); ❌ ERROR
const test = function () {
  console.log("Not hoisted");
};

// WHY?
// variable exists but function not initialized yet

/*
==================================================
⚡ ARROW FUNCTIONS
==================================================
*/

const sum = (a, b) => {
  return a + b;
};

console.log(sum(3, 4));
// 7 → WHY?
// arrow function behaves like function expression


/*
🔥 SHORT SYNTAX
*/

const square = x => x * x;

console.log(square(5));
// 25 → WHY?
// single expression → implicit return


/*
==================================================
📌 "this" BEHAVIOR (VERY IMPORTANT)
==================================================
*/

const obj = {
  name: "Hassan",
  
  normalFunc: function () {
    console.log(this.name);
  },

  arrowFunc: () => {
    console.log(this.name);
  }
};

obj.normalFunc();
// "Hassan" → WHY?
// normal function → this refers to object

obj.arrowFunc();
// undefined → WHY?
// arrow function → no own this → takes from outer scope (global)


/*
==================================================
📌 ARGUMENTS OBJECT
==================================================
*/

function normal() {
  console.log(arguments);
}

normal(1, 2, 3);
// [1,2,3] → WHY?
// normal functions have arguments object


const arrow = () => {
  // console.log(arguments); ❌ ERROR
};
// WHY?
// arrow functions DO NOT have arguments


/*
==================================================
📌 DEFAULT PARAMETERS
==================================================
*/

function greetUser(name = "Guest") {
  return "Hello " + name;
}

console.log(greetUser());
// "Hello Guest" → WHY?
// default value used when no argument passed


/*
==================================================
📌 REST PARAMETERS
==================================================
*/

function total(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(total(1, 2, 3));
// 6 → WHY?
// ... collects all arguments into array


/*
==================================================
📌 CALLBACK FUNCTIONS
==================================================
*/

function processUser(name, callback) {
  callback(name);
}

processUser("Hassan", function(name) {
  console.log("Hello " + name);
});
// "Hello Hassan" → WHY?
// function passed as argument → executed later


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: Function vs Arrow "this"
const user = {
  name: "Ali",
  show: function () {
    console.log(this.name);
  }
};

user.show();
// "Ali" → normal function binds this to object


// Q2: Arrow "this" trap
const user2 = {
  name: "Ali",
  show: () => {
    console.log(this.name);
  }
};

user2.show();
// undefined → arrow has no own this


// Q3: Hoisting difference
hoisted();  

function hoisted() {
  console.log("Works");
}
// Works → declaration hoisted


// Q4: Predict output
console.log(typeof function(){});  
// "function" → WHY?
// special type in JS


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Button click (callback)
function onClick(handler) {
  handler();
}

onClick(() => console.log("Clicked"));
// WHY?
// arrow function used as callback


// Example 2: Map with arrow function
let nums = [1, 2, 3];

let doubled = nums.map(n => n * 2);

console.log(doubled);
// [2,4,6] → WHY?
// map applies function to each element


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Arrow function returning object
const getObj = () => ({ name: "Hassan" });

console.log(getObj());
// {name: "Hassan"} → WHY?
// wrap object in () to avoid confusion


// ❗ Missing return in arrow
const wrong = (a, b) => {
  a + b;
};

console.log(wrong(2, 3));
// undefined → WHY?
// no return statement


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

const fn = () => this;
console.log(fn());
// ?

function test() {
  return arguments.length;
}
console.log(test(1,2,3));
// ?

const add2 = (a,b) => a+b;
console.log(add2(2,2));
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Function Declaration → hoisted
Function Expression → not hoisted
Arrow Function → no this, no arguments

this:
normal → depends on caller
arrow → from outer scope

() => x → implicit return

...rest → collects values into array

callback → function passed as argument
*/