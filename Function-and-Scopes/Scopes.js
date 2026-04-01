/******************************************************
 * 🌍 SCOPE IN JAVASCRIPT 
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Scope = where variables are accessible

Types:
1. Global Scope
2. Function (Local) Scope
3. Block Scope (let, const)

Key Idea:
JS uses LEXICAL SCOPING → scope defined by where code is written
*/


/*
==================================================
🌍 GLOBAL SCOPE
==================================================
*/

let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();
// "I am global" → WHY?
// global variables are accessible everywhere


/*
==================================================
🏠 FUNCTION (LOCAL) SCOPE
==================================================
*/

function testLocal() {
  let localVar = "I am local";
  console.log(localVar);
}

testLocal();
// "I am local" → WHY?
// accessible inside function

// console.log(localVar); ❌ ERROR
// WHY?
// localVar is not accessible outside function


/*
==================================================
📦 BLOCK SCOPE (let, const)
==================================================
*/

if (true) {
  let blockVar = "Block scope";
  const blockConst = "Also block";
  console.log(blockVar);
}
// "Block scope" → WHY?
// let/const are limited to block

// console.log(blockVar); ❌ ERROR
// WHY?
// block scope ends after {}


/*
==================================================
⚠️ VAR IS DIFFERENT (IMPORTANT)
==================================================
*/

if (true) {
  var varVar = "I am var";
}

console.log(varVar);
// "I am var" → WHY?
// var ignores block scope → function/global scoped


/*
==================================================
🧠 LEXICAL SCOPING
==================================================
*/

function outer() {
  let outerVar = "Outer";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();
// "Outer" → WHY?
// inner function can access variables of outer function


/*
==================================================
📌 VARIABLE SHADOWING
==================================================
*/

let x = 10;

function shadow() {
  let x = 20;
  console.log(x);
}

shadow();
// 20 → WHY?
// inner variable shadows outer variable

console.log(x);
// 10 → WHY?
// outer variable remains unchanged


/*
==================================================
📌 BLOCK + SHADOWING
==================================================
*/

let y = 5;

if (true) {
  let y = 10;
  console.log(y);
}
// 10 → WHY?
// block scope creates new variable

console.log(y);
// 5 → WHY?
// outer scope unaffected


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: var vs let in loop
for (var i = 0; i < 3; i++) {}

console.log(i);
// 3 → WHY?
// var is function scoped → accessible outside


for (let j = 0; j < 3; j++) {}

// console.log(j); ❌ ERROR
// WHY?
// let is block scoped → not accessible outside


// Q2: Closure + scope
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let c = counter();

c(); // 1
c(); // 2
// WHY?
// inner function remembers outer scope (closure)


// Q3: Scope chain
let a = "global";

function one() {
  let b = "one";

  function two() {
    let c = "two";
    console.log(a, b, c);
  }

  two();
}

one();
// "global one two"
// WHY?
// JS looks in current scope → then outer → then global


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Private variable using closure
function createUser() {
  let password = "12345";

  return {
    getPassword: function () {
      return password;
    }
  };
}

let user = createUser();

console.log(user.getPassword());
// "12345" → WHY?
// closure allows access to private variable


// Example 2: Loop with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 0,1,2 → WHY?
// let creates new scope for each iteration


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ var hoisting confusion
console.log(aVar);
var aVar = 10;
// undefined → WHY?
// var is hoisted but initialized as undefined


// ❗ let/const TDZ (Temporal Dead Zone)
// console.log(aLet); ❌ ERROR
let aLet = 10;
// WHY?
// cannot access before initialization


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

if (true) {
  var a = 1;
}
console.log(a);
// ?

if (true) {
  let b = 2;
}
// console.log(b);
// ?

function test() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Global → accessible everywhere
Function → inside function only
Block → inside {}

var → function scoped (avoid)
let/const → block scoped

Lexical scope → defined by code structure

Shadowing → inner variable overrides outer

Closure → function remembers outer variables

TDZ → let/const not accessible before init
*/