/******************************************************
 * 🧭 "this" KEYWORD – REAL USE CASES ()
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

"this" depends on HOW function is called

Rules:
1. Global → this = global object
2. Object method → this = object
3. Arrow function → no own this (inherits)
4. Constructor → this = new object
5. call/apply/bind → manually set this
*/

/*
==================================================
🧠 USE CASE 1: OBJECT METHODS
==================================================
*/

const user = {
  name: "Hassan",
  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();
// "Hello Hassan" → WHY?
// method called using object → this = user

/*
==================================================
🧠 USE CASE 2: METHOD LOST CONTEXT
==================================================
*/

const user2 = {
  name: "Ali",
  greet() {
    console.log(this.name);
  },
};

const fn = user2.greet;
fn();
// undefined → WHY?
// function called without object → this = global

/*
==================================================
🧠 USE CASE 3: FIX WITH bind()
==================================================
*/

const boundFn = user2.greet.bind(user2);
boundFn();
// "Ali" → WHY?
// bind permanently sets this

/*
==================================================
🧠 USE CASE 4: EVENT HANDLER (REAL WORLD)
==================================================
*/

const button = {
  text: "Click Me",
  click() {
    console.log(this.text);
  },
};

button.click();
// "Click Me" → WHY?
// method called on object

/*
==================================================
🧠 USE CASE 5: setTimeout ISSUE
==================================================
*/

const obj = {
  name: "Hassan",

  show() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
};

obj.show();
// undefined → WHY?
// regular function → this = global inside setTimeout

/*
==================================================
🧠 USE CASE 6: FIX WITH ARROW
==================================================
*/

const objFix = {
  name: "Hassan",

  show() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

objFix.show();
// "Hassan" → WHY?
// arrow inherits this from outer (objFix)

/*
==================================================
🧠 USE CASE 7: CONSTRUCTOR FUNCTION
==================================================
*/

function Person(name) {
  this.name = name;
}

const p = new Person("Hassan");

console.log(p.name);
// "Hassan" → WHY?
// new creates object → this = that object

/*
==================================================
🧠 USE CASE 8: call / apply
==================================================
*/

function greet() {
  console.log("Hello " + this.name);
}

const user3 = { name: "Hassan" };

greet.call(user3);
// "Hello Hassan" → WHY?
// call sets this manually

/*
==================================================
🧠 USE CASE 9: apply
==================================================
*/

greet.apply(user3);
// same as call → WHY?
// apply also sets this (args difference)

/*
==================================================
🧠 USE CASE 10: bind (REAL WORLD)
==================================================
*/

const user4 = {
  name: "Ali",
};

const greetAli = greet.bind(user4);

greetAli();
// "Hello Ali" → WHY?
// bind returns new function with fixed this

/*
==================================================
🧠 USE CASE 11: ARROW FUNCTION IN OBJECT (TRAP)
==================================================
*/

const objArrow = {
  name: "Hassan",
  show: () => {
    console.log(this.name);
  },
};

objArrow.show();
// undefined → WHY?
// arrow has no this → takes from global

/*
==================================================
🧠 USE CASE 12: CHAINING METHODS
==================================================
*/

const counter = {
  count: 0,

  inc() {
    this.count++;
    return this;
  },

  dec() {
    this.count--;
    return this;
  },
};

counter.inc().inc().dec();

console.log(counter.count);
// 1 → WHY?
// returning this enables chaining

/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1:
function test() {
  console.log(this);
}

test();
// global object → WHY?
// default binding

// Q2:
const objTest = {
  name: "A",
  show() {
    console.log(this.name);
  },
};

setTimeout(objTest.show, 100);
// undefined → WHY?
// method loses context

// Q3: Fix
setTimeout(objTest.show.bind(objTest), 100);
// "A" → WHY?
// bind preserves this

/*
==================================================
💻 REAL-WORLD SCENARIOS
==================================================
*/

// Example: React-like pattern
const component = {
  state: { count: 0 },

  setState() {
    this.state.count++;
  },
};

component.setState();
// WHY?
// this refers to component

/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Arrow function as method
// ❗ Losing this in callbacks
// ❗ Forgetting bind

/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

const obj1 = {
  name: "Hassan",
  show() {
    return this.name;
  }
};

const f = obj1.show;
console.log(f());
// ?

const obj2 = {
  name: "Ali",
  show: () => console.log(this.name)
};

obj2.show();
// ?

*/

/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

this depends on CALL SITE

object.method() → this = object

function() → this = global

arrow → inherits this

new → this = new object

call/apply/bind → manually set this

setTimeout → loses this (fix with arrow/bind)
*/
