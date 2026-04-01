/******************************************************
 * 🧠 CLOSURES IN JAVASCRIPT (WITH WHY EXPLANATIONS)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Closure = function + its lexical scope

👉 A closure allows a function to:
- Access variables from its outer function
- EVEN AFTER the outer function has finished execution

Key idea:
Functions REMEMBER where they were created
*/


/*
==================================================
🧠 BASIC EXAMPLE
==================================================
*/

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

/*
WHY?
- outer() runs → creates count = 0
- returns inner function
- inner function STILL has access to count
- count is NOT destroyed → closure keeps it alive
*/


/*
==================================================
📌 VISUAL FLOW (MENTAL MODEL)
==================================================

outer() execution:
  count = 0
  return inner

inner() remembers:
  count (from outer scope)

👉 Even after outer finishes, memory is preserved
*/


/*
==================================================
🔥 INTERVIEW GOLD: PRIVATE VARIABLES
==================================================
*/

function createBankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

const account = createBankAccount();

account.deposit(500);   // 1500
account.withdraw(200);  // 1300

/*
WHY?
- balance is PRIVATE (not accessible directly)
- only accessible via closure functions
*/


/*
==================================================
📌 DATA ENCAPSULATION (REAL WORLD)
==================================================
*/

// console.log(account.balance); ❌ undefined

/*
WHY?
- balance is not exposed
- closure protects data
*/


/*
==================================================
⚠️ COMMON INTERVIEW TRAP (LOOPS)
==================================================
*/

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

/*
Output:
3
3
3

WHY?
- var is function scoped (same i shared)
- loop finishes → i becomes 3
- all callbacks print same value
*/


/*
==================================================
🔥 FIX USING let (BLOCK SCOPE)
==================================================
*/

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j);
  }, 100);
}

/*
Output:
0
1
2

WHY?
- let creates NEW variable for each iteration
- each closure captures its own j
*/


/*
==================================================
🔥 FIX USING CLOSURE (CLASSIC)
==================================================
*/

for (var k = 0; k < 3; k++) {
  (function (kCopy) {
    setTimeout(function () {
      console.log(kCopy);
    }, 100);
  })(k);
}

/*
WHY?
- IIFE creates new scope
- kCopy stores current value
- closure captures correct value
*/


/*
==================================================
📌 FUNCTION FACTORY (IMPORTANT PATTERN)
==================================================
*/

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
WHY?
- inner function remembers x
- each call creates separate closure
*/


/*
==================================================
📌 CLOSURE WITH EVENT HANDLERS (REAL WORLD)
==================================================
*/

function setupButton() {
  let clicks = 0;

  return function () {
    clicks++;
    console.log("Clicked:", clicks);
  };
}

const clickHandler = setupButton();

clickHandler(); // 1
clickHandler(); // 2

/*
WHY?
- clicks persists between calls
- closure keeps state
*/


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: What is closure?
// A function that remembers variables from outer scope even after execution


// Q2: Predict output
function test() {
  let x = 10;

  return function () {
    console.log(x);
  };
}

let fn = test();
fn(); // 10

// WHY?
// closure retains x


// Q3: Multiple closures
function counterFactory() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let c1 = counterFactory();
let c2 = counterFactory();

console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1

/*
WHY?
- each call creates NEW closure
- separate memory
*/


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Memory leak risk
function heavy() {
  let bigData = new Array(1000000).fill("data");

  return function () {
    console.log(bigData.length);
  };
}

/*
WHY?
- closure keeps bigData in memory
- can cause memory issues if not needed
*/


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

function outer() {
  let x = 5;
  return function () {
    return x * 2;
  };
}

console.log(outer()());
// ?


// Predict:

for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 100);
}
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Closure = function + outer variables

Used for:
- Data privacy
- State management
- Callbacks

let fixes loop closure issue
var causes shared reference issue

Each function call → new closure

Closures keep memory alive
*/