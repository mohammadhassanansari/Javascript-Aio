/******************************************************
 * 🧩 OBJECTS & METHODS IN JAVASCRIPT* 
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Objects = key-value pairs

Key points:
- Keys → strings (or symbols)
- Values → any data type (function, array, object)

Methods = functions inside objects

Important:
- Objects are stored by REFERENCE
- "this" depends on HOW function is called
*/


/*
==================================================
🧠 BASIC OBJECT
==================================================
*/

const user = {
  name: "Hassan",
  age: 22
};

console.log(user.name); 
// "Hassan" → WHY?
// dot notation accesses property

console.log(user["age"]);
// 22 → WHY?
// bracket notation uses string key


/*
==================================================
📌 ADD / UPDATE / DELETE
==================================================
*/

user.city = "Mumbai";
console.log(user.city);
// "Mumbai" → WHY?
// new property added dynamically

user.age = 25;
console.log(user.age);
// 25 → WHY?
// existing property updated

delete user.city;
console.log(user.city);
// undefined → WHY?
// property removed


/*
==================================================
📌 OBJECT REFERENCE (IMPORTANT)
==================================================
*/

let obj1 = { a: 1 };
let obj2 = obj1;

obj2.a = 10;

console.log(obj1.a);
// 10 → WHY?
// both point to same object (reference)


/*
==================================================
📌 OBJECT CLONING (FIX REFERENCE ISSUE)
==================================================
*/

let original = { x: 1 };

// shallow copy
let copy = { ...original };

copy.x = 99;

console.log(original.x);
// 1 → WHY?
// spread creates new object (separate reference)


/*
==================================================
📌 METHODS (FUNCTIONS INSIDE OBJECT)
==================================================
*/

const person = {
  name: "Ali",

  greet: function () {
    console.log("Hello " + this.name);
  }
};

person.greet();
// "Hello Ali" → WHY?
// this refers to object calling the method


/*
==================================================
🔥 "this" BEHAVIOR (VERY IMPORTANT)
==================================================
*/

const obj = {
  name: "Hassan",

  normal: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  }
};

obj.normal();
// "Hassan" → WHY?
// normal function → this = object

obj.arrow();
// undefined → WHY?
// arrow function → no own this → uses outer (global)


/*
==================================================
📌 METHOD SHORTHAND
==================================================
*/

const car = {
  brand: "BMW",

  start() {
    console.log(this.brand + " started");
  }
};

car.start();
// "BMW started" → WHY?
// shorthand is same as function


/*
==================================================
📌 DYNAMIC KEYS
==================================================
*/

let keyName = "color";

let product = {
  [keyName]: "red"
};

console.log(product.color);
// "red" → WHY?
// [] evaluates variable as key


/*
==================================================
📌 OBJECT DESTRUCTURING
==================================================
*/

const user2 = {
  name: "Hassan",
  age: 22
};

const { name, age } = user2;

console.log(name);
// "Hassan" → WHY?
// extracts property into variable


/*
==================================================
📌 NESTED OBJECTS
==================================================
*/

const company = {
  name: "Tech",
  address: {
    city: "Mumbai"
  }
};

console.log(company.address.city);
// "Mumbai" → WHY?
// access nested structure step-by-step


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: Object comparison
// console.log({} === {});  
// false → WHY?
// different references


// Q2: Method extraction issue
const user3 = {
  name: "Hassan",
  getName() {
    console.log(this.name);
  }
};

const fn = user3.getName;
fn();
// undefined → WHY?
// function lost object context


// Q3: Fix using bind
const boundFn = user3.getName.bind(user3);
boundFn();
// "Hassan" → WHY?
// bind fixes this


// Q4: Predict output
const objA = {
  name: "A",
  say() {
    return this.name;
  }
};

const objB = { name: "B" };

console.log(objA.say.call(objB));
// "B" → WHY?
// call sets this manually


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: User object
const userProfile = {
  name: "Hassan",
  login() {
    console.log(this.name + " logged in");
  }
};

userProfile.login();
// WHY?
// method uses object data


// Example 2: Counter using object
const counter = {
  count: 0,

  inc() {
    this.count++;
    console.log(this.count);
  }
};

counter.inc(); // 1
counter.inc(); // 2

/*
WHY?
- state stored in object
- method modifies state
*/


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ this inside setTimeout
const objTimeout = {
  name: "Hassan",

  show() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  }
};

objTimeout.show();
// undefined → WHY?
// function inside setTimeout → this = global


// ✅ FIX with arrow
const objFix = {
  name: "Hassan",

  show() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};

objFix.show();
// "Hassan" → WHY?
// arrow inherits this from outer function


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 5;

console.log(obj1.a);
// ?

const user = {
  name: "Ali",
  greet() {
    console.log(this.name);
  }
};

const g = user.greet;
g();
// ?

console.log([] === []);
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Objects → reference type

this:
normal → depends on caller
arrow → from outer scope

{} === {} → false (different refs)

bind() → fix this

...spread → clone object

method shorthand → cleaner syntax

[] → dynamic keys
*/