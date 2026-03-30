/******************************************************
 * ➕ OPERATORS IN JAVASCRIPT (WITH WHY EXPLANATIONS)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Operators perform operations on values.

Key idea:
JS does TYPE COERCION in many cases.

Important:
+ behaves differently for strings vs numbers
&& and || return VALUES (not just true/false)
*/


/*
==================================================
🧠 ARITHMETIC OPERATORS
==================================================
*/

console.log(5 + 2);  
// 7 → simple addition (both numbers)

console.log("5" + 2);  
// "52" → WHY?
// + operator sees a string → converts number to string → concatenation

console.log("5" - 2);  
// 3 → WHY?
// - operator only works with numbers → converts "5" → 5 → 5 - 2


/*
==================================================
📌 COMPARISON OPERATORS
==================================================
*/

console.log(5 == "5");  
// true → WHY?
// == does TYPE COERCION → converts "5" → 5 → compares → equal

console.log(5 === "5");  
// false → WHY?
// === checks value + type → number !== string

console.log(null == undefined);  
// true → WHY?
// special JS rule → null loosely equals undefined only

console.log(null === undefined);  
// false → WHY?
// different types → strict equality fails


/*
==================================================
📌 LOGICAL OPERATORS (IMPORTANT)
==================================================
*/

console.log(true && false);  
// false → WHY?
// AND needs both true → one is false → result false


/*
🔥 KEY CONCEPT:
&& and || DO NOT return true/false always
They return VALUES
*/


console.log(0 || "Hello");  
// "Hello" → WHY?
// || returns FIRST TRUTHY value
// 0 = falsy → moves to "Hello"

console.log("Hi" && 100);  
// 100 → WHY?
// && returns LAST VALUE if all are truthy
// "Hi" is truthy → so returns 100


console.log(null || "Fallback");  
// "Fallback" → WHY?
// null is falsy → returns next truthy value


console.log("Value" && 0);  
// 0 → WHY?
// && returns FIRST FALSY value → 0 is falsy


/*
==================================================
📌 UNARY OPERATORS
==================================================
*/

let num = 5;

console.log(++num);  
// 6 → WHY?
// pre-increment → first increases → then returns

console.log(num++);  
// 6 → WHY?
// post-increment → first returns → then increases

console.log(num);  
// 7 → final value


/*
==================================================
📌 TERNARY OPERATOR
==================================================
*/

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
// "Adult" → WHY?
// condition true → first value returned


/*
==================================================
📌 WEIRD COERCION (INTERVIEW FAVORITE)
==================================================
*/

console.log([] + []);  
// "" → WHY?
// [] → converted to "" (empty string)
// "" + "" → ""

console.log([] + {});  
// "[object Object]" → WHY?
// [] → ""
// {} → "[object Object]"
// "" + "[object Object]"

console.log(true + false);  
// 1 → WHY?
// true → 1, false → 0 → 1 + 0

console.log([] == false);  
// true → WHY?
// [] → "" → 0
// false → 0
// 0 == 0


/*
==================================================
⚠️ PITFALLS
==================================================
*/

console.log(NaN == NaN);  
// false → WHY?
// NaN is never equal to anything (even itself)

console.log("" == 0);  
// true → WHY?
// "" → 0 → 0 == 0

console.log([] == 0);  
// true → WHY?
// [] → "" → 0


/*
==================================================
🧩 PRACTICE (TRY YOURSELF)
==================================================

// Predict WHY:

console.log("10" - "5");  
// ?

console.log("10" + "5");  
// ?

console.log(true + true);  
// ?

console.log([] == ![]);  
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

+ → string present → concatenation
- → forces number conversion

== → converts types
=== → no conversion

|| → first truthy
&& → first falsy OR last truthy

Falsy values:
false, 0, "", null, undefined, NaN

[] → "" → 0 (in coercion)

true → 1
false → 0
*/
 