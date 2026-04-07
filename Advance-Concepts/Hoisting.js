/******************************************************
 * ⏳ HOISTING IN JAVASCRIPT (DEEP DIVE + WHY)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Hoisting = JS moves declarations to top of scope BEFORE execution

BUT:
- Only declarations are hoisted (not values)

Types:
1. var → hoisted + initialized as undefined
2. let/const → hoisted BUT in TDZ (not accessible)
3. function → fully hoisted (definition also)

Key Idea:
JS runs in 2 phases:
1. Memory Creation Phase
2. Execution Phase
*/

/*
==================================================
🧠 MEMORY PHASE vs EXECUTION PHASE
==================================================

Code:
var a = 10;

Memory Phase:
a → undefined

Execution Phase:
a → 10
*/

console.log(a);
var a = 10;

// undefined → WHY?
// var is hoisted → initialized as undefined
// console.log runs before assignment

/*
==================================================
📌 LET / CONST (TEMPORAL DEAD ZONE)
==================================================
*/

// console.log(b); ❌ ERROR
let b = 20;

/*
WHY?
- let is hoisted BUT NOT initialized
- exists in TDZ until declaration line
- accessing before → ReferenceError
*/

/*
==================================================
📌 FUNCTION HOISTING
==================================================
*/

sayHello();

function sayHello() {
  console.log("Hello");
}

// "Hello" → WHY?
// function declaration fully hoisted with body

/*
==================================================
📌 FUNCTION EXPRESSION (NOT HOISTED)
==================================================
*/

// greet(); ❌ ERROR
var greet = function () {
  console.log("Hi");
};

/*
WHY?
- var greet → hoisted as undefined
- function assigned later
- calling before assignment → error
*/

/*
==================================================
📌 ARROW FUNCTION HOISTING
==================================================
*/

// arrowFn(); ❌ ERROR
const arrowFn = () => {
  console.log("Arrow");
};

/*
WHY?
- const is in TDZ
- cannot access before initialization
*/

/*
==================================================
🔥 INTERVIEW TRAPS
==================================================
*/

// Q1:
console.log(x);
var x = 5;

// undefined → WHY?
// declaration hoisted, value not

// Q2:
// console.log(y);
let y = 10;

// ReferenceError → WHY?
// TDZ

// Q3:
hoistFn();

function hoistFn() {
  console.log("Works");
}

// Works → WHY?
// function declaration hoisted fully

// Q4:
var z = 1;

function test() {
  console.log(z);
  var z = 2;
}

test();

// undefined → WHY?
// inside function → var z hoisted
// shadows outer z
// local z = undefined initially

/*
==================================================
📌 VARIABLE SHADOWING + HOISTING
==================================================
*/

var a = 10;

function demo() {
  console.log(a);
  var a = 20;
}

demo();

// undefined → WHY?
// local a is hoisted → shadows global
// value assigned later

/*
==================================================
📌 LET FIXES HOISTING CONFUSION
==================================================
*/

let m = 10;

function demo2() {
  // console.log(m); ❌ ERROR
  let m = 20;
}

demo2();

/*
WHY?
- let has TDZ
- prevents accidental access before init
*/

/*
==================================================
📌 FUNCTION INSIDE BLOCK (STRICT MODE NOTE)
==================================================
*/

if (true) {
  function inside() {
    console.log("Inside");
  }
}

inside();
// Works in non-strict mode

/*
WHY?
- function declarations in block behave differently
- avoid relying on this
*/

/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Safe variable usage
function safe() {
  let x = 10;
  console.log(x);
}
// WHY?
// declare before use → avoids hoisting bugs

// Example 2: Function first
function main() {
  helper();
}

function helper() {
  console.log("Helping...");
}

main();
// WHY?
// function declarations hoisted → order doesn't matter

/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Mixing var and let
var p = 1;

if (true) {
  var p = 2;
}

console.log(p);
// 2 → WHY?
// var is NOT block scoped

// ❗ Duplicate declarations
var d = 1;
var d = 2;

console.log(d);
// 2 → WHY?
// var allows redeclaration

/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

console.log(a);
var a = 1;
// ?

// console.log(b);
let b = 2;
// ?

function x() {
  console.log(a);
  var a = 5;
}
x();
// ?

*/

/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Hoisting = declarations moved to top

var → undefined (usable before assign)
let/const → TDZ (NOT usable before assign)

function → fully hoisted

function expression → behaves like variable

Shadowing + hoisting → common trap

Best Practice:
- use let/const
- declare before use
*/
