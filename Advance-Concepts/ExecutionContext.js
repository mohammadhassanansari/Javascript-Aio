/******************************************************
 * ⚙️ EXECUTION CONTEXT IN JAVASCRIPT (DEEP DIVE + WHY)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Execution Context = Environment where JS code runs

Types:
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

JS runs code in 2 phases:
1. Memory Creation Phase
2. Execution Phase
*/


/*
==================================================
🧠 GLOBAL EXECUTION CONTEXT (GEC)
==================================================

When JS starts:
- Creates Global Execution Context

Contains:
- Global object (window in browser)
- this (points to global object)
- Variables & functions

ONLY ONE GEC exists
*/


console.log(this);
// window (browser) → WHY?
// global this refers to global object


/*
==================================================
📌 MEMORY CREATION PHASE
==================================================
*/

var a = 10;

function greet() {
  console.log("Hello");
}

/*
Before execution:

Memory Phase:
a → undefined
greet → function definition

WHY?
- JS scans code first
- allocates memory for variables/functions
*/


/*
==================================================
📌 EXECUTION PHASE
==================================================
*/

console.log(a); // undefined (before assignment)
a = 10;

greet(); // "Hello"

/*
WHY?
- code runs line by line
- values assigned now
*/


/*
==================================================
📌 FUNCTION EXECUTION CONTEXT (FEC)
==================================================
*/

function test() {
  let x = 5;
  console.log(x);
}

test();

/*
WHAT HAPPENS?
1. New Execution Context created
2. Added to CALL STACK
3. Runs function
4. Removed after execution
*/


/*
==================================================
📌 CALL STACK
==================================================
*/

function one() {
  two();
}

function two() {
  console.log("Inside two");
}

one();

/*
CALL STACK FLOW:
one() → pushed
two() → pushed
console.log → executed
two() → popped
one() → popped

WHY?
- Stack follows LIFO (Last In First Out)
*/


/*
==================================================
🔥 EXECUTION CONTEXT FLOW
==================================================
*/

var n = 2;

function square(num) {
  return num * num;
}

function printSquare(num) {
  let result = square(num);
  console.log(result);
}

printSquare(n);

/*
FLOW:

1. GEC created
2. Memory Phase:
   n → undefined
   square → function
   printSquare → function

3. Execution Phase:
   n = 2
   printSquare(2) → new FEC

4. Inside printSquare:
   result → undefined
   calls square → new FEC

5. square returns 4
6. console.log(4)

WHY?
- each function gets its own execution context
*/


/*
==================================================
📌 SCOPE CHAIN + EXECUTION CONTEXT
==================================================
*/

let aVal = 10;

function outer() {
  let bVal = 20;

  function inner() {
    console.log(aVal, bVal);
  }

  inner();
}

outer();

/*
Output: 10 20

WHY?
- inner → checks its scope
- not found → goes to outer
- not found → goes to global
*/


/*
==================================================
📌 "this" IN EXECUTION CONTEXT
==================================================
*/

function show() {
  console.log(this);
}

show();

/*
WHY?
- in global execution → this = global object
*/


const obj = {
  name: "Hassan",
  show() {
    console.log(this.name);
  }
};

obj.show();
// "Hassan" → WHY?
// this depends on how function is called


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: How many execution contexts?
// 1 global + multiple function contexts


// Q2: What is call stack?
// Structure that manages execution contexts


// Q3: Predict output
console.log(x);
var x = 5;

// undefined → WHY?
// memory phase assigned undefined


// Q4: Nested execution contexts
function a() {
  console.log("A");
  b();
}

function b() {
  console.log("B");
}

a();

/*
Output:
A
B

WHY?
- a pushed → executes
- b pushed → executes
- popped in reverse order
*/


/*
==================================================
💻 REAL-WORLD EXAMPLE
==================================================
*/

// Example: calculator
function add(a, b) {
  return a + b;
}

function calculate() {
  let result = add(2, 3);
  console.log(result);
}

calculate();

/*
WHY?
- calculate → new context
- add → new context
- result passed back
*/


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Variable shadowing
var x = 10;

function demo() {
  console.log(x);
  var x = 20;
}

demo();
// undefined → WHY?
// local x hoisted → shadows global


// ❗ Forgetting execution flow
// leads to confusion in async + closures


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

function test() {
  console.log(a);
  var a = 5;
}
test();
// ?

function outer() {
  let x = 1;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Execution Context = where code runs

Types:
- Global (once)
- Function (per call)

Phases:
1. Memory (hoisting)
2. Execution

Call Stack:
- manages contexts
- LIFO

Each function call → new context

Scope chain → find variables
*/