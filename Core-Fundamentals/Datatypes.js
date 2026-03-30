/******************************************************
 * 🔢 DATA TYPES IN JAVASCRIPT (MASTER FILE)
 * Use this file for:
 * - Revision
 * - Running examples
 * - Interview prep
 ******************************************************/

/*
==================================================
 1. QUICK SUMMARY
==================================================

JavaScript has 2 types of data types:

1. Primitive (stored by VALUE)
   - string
   - number
   - bigint
   - boolean
   - undefined
   - null
   - symbol

2. Non-Primitive (stored by REFERENCE)
   - object
   - array
   - function
*/


/*
==================================================
🧠 2. DEEP UNDERSTANDING
==================================================
*/

// 🔹 Primitive Example (Copy by VALUE)
let a = 10;
let b = a;
b = 20;

console.log("Primitive Copy:");
console.log(a); // 10
console.log(b); // 20


// 🔹 Reference Example (Copy by REFERENCE)
let obj1 = { name: "Hassan" };
let obj2 = obj1;

obj2.name = "Ali";

console.log("\nReference Behavior:");
console.log(obj1.name); // "Ali" ❗


/*
👉 WHY?
- Primitive → Stack (copy)
- Object → Heap (reference)
*/


/*
==================================================
📌 typeof BEHAVIOR (IMPORTANT)
==================================================
*/

console.log("\ntypeof checks:");

console.log(typeof "hello");     // string
console.log(typeof 123);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object ❗ BUG
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function


/*
==================================================
📌 null vs undefined
==================================================

undefined → variable declared but not assigned
null → intentionally empty value
*/

let x;
console.log("\nnull vs undefined:");
console.log(x);       // undefined
console.log(null);    // null


/*
==================================================
📌 Dynamic Typing
==================================================
*/

let dynamic = 10;
dynamic = "hello";
dynamic = true;

console.log("\nDynamic Typing:");
console.log(dynamic); // true


/*
==================================================
🔥 3. FAANG INTERVIEW Q&A
==================================================
*/

// Q1: typeof NaN ?
console.log("\nQ1: typeof NaN");
console.log(typeof NaN); // number ❗


// Q2: Object comparison
console.log("\nQ2: Object Comparison");
let objA = {};
let objB = {};
console.log(objA === objB); // false ❗


// Q3: null vs undefined
console.log("\nQ3: null vs undefined");
console.log(null == undefined);  // true
console.log(null === undefined); // false


// Q4: Tricky coercion
console.log("\nQ4: [] == false");
console.log([] == false); // true ❗


// Q5: typeof array
console.log("\nQ5: typeof []");
console.log(typeof []); // object


/*
==================================================
💻 4. EXECUTABLE EXAMPLES
==================================================
*/

// Example 1: Primitive
let p1 = "hello";
let p2 = p1;
p2 = "world";

console.log("\nExample 1:");
console.log(p1); // hello
console.log(p2); // world


// Example 2: Object Reference
let user1 = { name: "Hassan" };
let user2 = user1;

user2.name = "Ali";

console.log("\nExample 2:");
console.log(user1.name); // Ali ❗


// Example 3: Array Reference
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log("\nExample 3:");
console.log(arr1); // [1,2,3,4]


// Example 4: Fix using Spread
let arr3 = [1, 2, 3];
let arr4 = [...arr3];

arr4.push(4);

console.log("\nExample 4:");
console.log(arr3); // [1,2,3]
console.log(arr4); // [1,2,3,4]


/*
==================================================
⚠️ 5. PITFALLS & GOTCHAS
==================================================
*/

// ❗ typeof null bug
console.log("\nPitfall 1:");
console.log(typeof null); // object


// ❗ Arrays are objects
console.log("\nPitfall 2:");
console.log(typeof []); // object
console.log(Array.isArray([])); // true ✅


// ❗ NaN is number
console.log("\nPitfall 3:");
console.log(typeof NaN); // number


// ❗ Equality traps
console.log("\nPitfall 4:");
console.log([] == false);        // true
console.log("" == 0);            // true
console.log(null == undefined);  // true


/*
==================================================
🧩 6. PRACTICE TASKS (TRY YOURSELF)
==================================================

// Task 1:
console.log(typeof []);

// Task 2:
let t1 = { x: 1 };
let t2 = t1;
t2.x = 5;
console.log(t1.x);

// Task 3 (Fix this):
let obj = { a: 1 };
let copy = obj;
copy.a = 2;

// 👉 Fix using:
let fixedCopy = { ...obj };

*/


/*
==================================================
📌 7. CHEAT SHEET
==================================================

Primitive → by value
Reference → by reference

typeof null === "object" ❗
typeof NaN === "number"

null == undefined → true
null === undefined → false

Array.isArray([]) → true

Spread operator → clone objects/arrays
*/

