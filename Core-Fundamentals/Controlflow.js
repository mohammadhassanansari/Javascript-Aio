/******************************************************
 * 🔁 CONTROL FLOW IN JAVASCRIPT (WITH WHY EXPLANATIONS)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Control flow decides HOW code runs:

1. if / else → decision making
2. switch → multiple conditions
3. loops → repeat execution
4. break / continue → control loops
5. try / catch → error handling

Key idea:
JS executes code TOP → DOWN unless control flow changes it
*/


/*
==================================================
🧠 IF / ELSE
==================================================
*/

let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
// "Minor" → WHY?
// condition (17 >= 18) is false → else block runs


/*
--------------------------------------------------
Truthy vs Falsy (VERY IMPORTANT)
--------------------------------------------------
Falsy values:
false, 0, "", null, undefined, NaN
Everything else → truthy
*/

if ("hello") {
  console.log("Runs");
}
// Runs → WHY?
// non-empty string = truthy

if (0) {
  console.log("Will not run");
}
// no output → WHY?
// 0 is falsy


/*
==================================================
📌 ELSE IF LADDER
==================================================
*/

let marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("C");
}
// "B" → WHY?
// first condition false → second condition true → stops there


/*
==================================================
📌 SWITCH CASE
==================================================
*/

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
}
// "Tuesday" → WHY?
// case 2 matches → executes → break stops further execution


/*
🔥 IMPORTANT: FALL-THROUGH
*/

let value = 1;

switch (value) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");

  default:
    console.log("Done");
}
// Output:
// One
// Two
// Done
// WHY?
// no break → execution continues to next cases


/*
==================================================
🔁 LOOPS
==================================================
*/

// 🔹 FOR LOOP
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0,1,2 → WHY?
// start i=0 → run while i<3 → increment after each iteration


// 🔹 WHILE LOOP
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// same output → WHY?
// runs until condition becomes false


// 🔹 DO-WHILE LOOP
let j = 5;

do {
  console.log(j);
  j++;
} while (j < 3);
// 5 → WHY?
// do-while runs AT LEAST once before checking condition


/*
==================================================
📌 BREAK & CONTINUE
==================================================
*/

// 🔹 break → stops loop completely
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// 0,1,2 → WHY?
// loop stops when i = 3


// 🔹 continue → skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// 0,1,3,4 → WHY?
// skips only when i = 2


/*
==================================================
📌 TRY / CATCH (ERROR HANDLING)
==================================================
*/

try {
  let result = x + 10; // x is not defined
  console.log(result);
} catch (error) {
  console.log("Error occurred");
}
// "Error occurred" → WHY?
// error thrown → catch block handles it


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: Truthy/Falsy
console.log(Boolean(""));  
// false → WHY? empty string is falsy

console.log(Boolean([]));  
// true → WHY? arrays are objects → truthy


// Q2: Infinite loop trap
// for (;;) { console.log("hi"); }
// WHY?
// no condition → always true → infinite loop


// Q3: Switch strict comparison
console.log("\nQ3:");
let val = "1";

switch (val) {
  case 1:
    console.log("Number");
    break;
  case "1":
    console.log("String");
}
// "String" → WHY?
// switch uses === (strict comparison)


// Q4: Loop scope
for (var k = 0; k < 3; k++) {}
console.log(k); 
// 3 → WHY?
// var is function-scoped → accessible outside loop


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Login check
let user = null;

if (!user) {
  console.log("Please login");
}
// WHY?
// !null → true → block executes


// Example 2: Find even numbers
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 2,4 → WHY?
// only even numbers pass condition


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Assignment instead of comparison
let a = 5;

if (a = 10) {
  console.log("Runs");
}
// Runs → WHY?
// a = 10 assigns value → returns 10 (truthy)


// ❗ Missing break in switch
// causes fall-through (already shown)


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

if ("0") console.log("Yes");
// ?

for (let i = 0; i < 3; i++) {
  if (i === 1) continue;
  console.log(i);
}
// ?

switch (2) {
  case "2":
    console.log("String");
  case 2:
    console.log("Number");
}
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

if → runs if condition is truthy

switch → uses === comparison

for → best when iterations known
while → condition-based loop
do-while → runs at least once

break → stops loop
continue → skips iteration

Falsy:
false, 0, "", null, undefined, NaN

Truthy:
everything else

⚠️ "=" inside if → assignment (bug)
*/

for (;;) { console.log("hi"); }