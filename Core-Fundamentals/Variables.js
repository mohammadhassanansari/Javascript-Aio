/*
====================== JAVASCRIPT REVISION + INTERVIEW PRACTICE ======================

Covers: let, const, var, scope, hoisting, strict mode, accidental globals, destructuring
Includes: FAANG-style questions with executable solutions
*/

// ======================= LET & CONST =======================
let message = "hello";
let i = 0, j = 0, k = 0;
let x = 2, y = x * x; // initializer can use previous variables

const H0 = 74;           // Hubble constant
const C = 299792.458;    // Speed of light
const AU = 1.496E8;      // Astronomical Unit

// Block Scope Example
const one = 1;
if (one === 1) {
    let one = 2;
    console.log("Block one:", one); // 2
}
console.log("Global one:", one); // 1

// ======================= VAR =======================
// Function-scoped variable
function exampleVar() {
    if (true) var a = 10;
    console.log("var function-scope a:", a); // accessible
}
exampleVar();

// Redeclaration allowed
function multipleLoops() {
    for (var i = 0; i < 1; i++) {}
    for (var i = 0; i < 1; i++) {}
    console.log("Redeclared var i:", i);
}
multipleLoops();

// Hoisting
function hoistingVar() {
    console.log("Hoisted var x:", x); // undefined
    var x = 5;
}
hoistingVar();

// Global var → property of globalThis
var g = 10;
console.log("Global var g on globalThis:", globalThis.g);

// ======================= STRICT MODE =======================
function strictModeExample() {
    "use strict";
    // z = 100; // ❌ ReferenceError
}
strictModeExample();

// Non-strict mode → accidental global
function accidentalGlobal() {
    a = 50; // creates global
}
accidentalGlobal();
console.log("Accidental global a:", globalThis.a); // 50
delete globalThis.a;

// ======================= DESTRUCTURING =======================

// Array destructuring
let [p, q] = [1, 2];
console.log("Array destructuring:", p, q);

// Swap variables
[p, q] = [q, p];
console.log("Swapped:", p, q);

// Default values
let [r = 10, s = 20] = [5];
console.log("Defaults:", r, s); // r=5, s=20

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log("Object destructuring:", name, age);

// Renaming
const { name: userName } = person;
console.log("Renamed:", userName);

// Nested destructuring
const nested = { info: { city: "Paris", country: "France" } };
const { info: { city, country } } = nested;
console.log("Nested destructuring:", city, country);

// =======================INTERVIEW QUESTIONS =======================

// 1️⃣ What will this print? (var vs let in loop)
function varLetLoop() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log("var i inside timeout:", i), 0);
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log("let j inside timeout:", j), 0);
    }
}
varLetLoop();
// ✅ Explanation: var is function scoped, all 3 log as 3; let is block scoped, logs 0,1,2

// 2️⃣ Hoisting behavior
function hoistingCheck() {
    console.log(aVar); // undefined
    // console.log(aLet); // ❌ ReferenceError
    var aVar = "I am var";
    let aLet = "I am let";
    console.log(aVar, aLet);
}
hoistingCheck();

// 3️⃣ Destructuring swap
let [first, second] = [100, 200];
[first, second] = [second, first];
console.log("Swapped values:", first, second); // 200,100

// 4️⃣ Accidental global in non-strict mode
function accidentalGlobalExample() {
    b = 999; // creates global in non-strict mode
}
accidentalGlobalExample();
console.log("Accidental global b:", globalThis.b); // 999
delete globalThis.b;

// 5️⃣ Deep nested destructuring
const deep = { a: { b: { c: 42 } } };
const { a: { b: { c } } } = deep;
console.log("Deep nested value c:", c); // 42

// 6️⃣ Can you re-declare variables?
function redeclareCheck() {
    var x = 1;
    var x = 2; // ✅ allowed
    console.log("Redeclared var x:", x);

    let y = 10;
    // let y = 20; // ❌ SyntaxError
    console.log("let y:", y);
}
redeclareCheck();

// 7️⃣ Challenge: swap using destructuring in one line
let m = 7, n = 9;
[m, n] = [n, m];
console.log("Challenge swap:", m, n); // 9,7

// ======================= KEY TAKEAWAYS =======================
/*
1. Prefer let/const over var for safer scoping.
2. const for values that do not change; let for variables that change.
3. Strict mode prevents accidental globals and common silent errors.
4. var is function-scoped, hoisted, and allows redeclaration — can cause bugs.
5. Destructuring simplifies variable extraction, swapping, defaults, renaming.
6. Understand var vs let in loops (common FAANG question).
7. Accidental globals are possible in non-strict mode.
8. Always initialize variables where possible to avoid undefined values.
*/