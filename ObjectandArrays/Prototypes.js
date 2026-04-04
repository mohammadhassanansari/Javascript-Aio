/******************************************************
 * 🧬 PROTOTYPES IN JAVASCRIPT 
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Every JavaScript object has a hidden property:
→ [[Prototype]] (aka __proto__)

👉 This links objects together (prototype chain)

Used for:
- Inheritance
- Sharing methods
- Memory optimization

Key Idea:
If property not found → JS looks in prototype
*/


/*
==================================================
🧠 BASIC PROTOTYPE LOOKUP
==================================================
*/

const user = {
  name: "Hassan"
};

console.log(user.toString());
// WHY?
// user doesn't have toString()
// JS looks in prototype → finds it in Object.prototype


/*
==================================================
📌 PROTOTYPE CHAIN
==================================================

user → Object.prototype → null

👉 If not found anywhere → undefined
*/

console.log(user.hasOwnProperty("name")); 
// true → WHY?
// method comes from Object.prototype


/*
==================================================
📌 __proto__ (INTERNAL LINK)
==================================================
*/

const obj = {};

console.log(obj.__proto__);
/*
WHY?
- __proto__ points to Object.prototype
- this is how inheritance works internally
*/


/*
==================================================
📌 CONSTRUCTOR FUNCTION
==================================================
*/

function Person(name) {
  this.name = name;
}

const p1 = new Person("Hassan");

console.log(p1.name);
// "Hassan" → WHY?
// this.name assigns property to new object


/*
==================================================
📌 PROTOTYPE PROPERTY
==================================================
*/

Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};

p1.greet();
// "Hello Hassan" → WHY?
// method not on object → found in prototype


/*
🔥 WHY USE PROTOTYPE?
- Methods shared across all instances
- Saves memory (not copied per object)
*/


/*
==================================================
📌 INSTANCE vs PROTOTYPE
==================================================
*/

console.log(p1.hasOwnProperty("name"));
// true → own property

console.log(p1.hasOwnProperty("greet"));
// false → from prototype


/*
==================================================
📌 PROTOTYPE CHAIN LOOKUP
==================================================
*/

console.log(p1.toString());
/*
WHY?
- not in p1
- not in Person.prototype
- found in Object.prototype
*/


/*
==================================================
📌 OVERRIDING PROPERTIES
==================================================
*/

Person.prototype.say = function () {
  console.log("From prototype");
};

p1.say(); 
// From prototype

p1.say = function () {
  console.log("From object");
};

p1.say(); 
// From object

/*
WHY?
- JS first checks object
- then prototype
- object overrides prototype
*/


/*
==================================================
📌 Object.create()
==================================================
*/

const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);

dog.speak();
// "Animal speaks" → WHY?
// dog inherits from animal


/*
==================================================
📌 PROTOTYPE CHECK
==================================================
*/

console.log(animal.isPrototypeOf(dog));
// true → WHY?
// animal is in prototype chain of dog


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: What is prototype?
// Object from which other objects inherit properties


// Q2: Predict output
function A() {}
A.prototype.x = 10;

const a = new A();

console.log(a.x);
// 10 → WHY?
// property found in prototype


// Q3: Prototype chain
console.log(a.__proto__ === A.prototype);
// true → WHY?
// instance links to constructor prototype


// Q4: What happens if property not found?
// JS climbs prototype chain until null


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Shared method
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log(this.brand + " started");
};

const c1 = new Car("BMW");
const c2 = new Car("Audi");

c1.start();
c2.start();

/*
WHY?
- start method shared via prototype
- not duplicated
*/


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Changing prototype after object creation
function Test() {}
const t = new Test();

Test.prototype.say = function () {
  console.log("Hello");
};

t.say();
// works → WHY?
// prototype is dynamic → lookup happens at runtime


// ❗ Replacing prototype completely
function Demo() {}
Demo.prototype = {
  greet() {
    console.log("Hi");
  }
};

const d = new Demo();

d.greet();
// works, BUT constructor lost

console.log(d.constructor);
// Object → WHY?
// original constructor overwritten


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

function X() {}
X.prototype.y = 5;

let x1 = new X();

console.log(x1.y);
// ?

console.log(x1.__proto__ === X.prototype);
// ?

console.log(x1.hasOwnProperty("y"));
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Every object → has [[Prototype]]

obj → __proto__ → prototype

If property not found → search prototype chain

prototype → used with constructor functions

Object.create() → sets prototype manually

Own property > Prototype property

Methods in prototype → memory efficient
*/