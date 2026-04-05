/******************************************************
 * 🪄 ARRAY MAGIC (map, filter, reduce) 
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

map    → transform each element → returns NEW array
filter → select elements → returns NEW array
reduce → reduce to single value → returns ANY type

IMPORTANT:
- Original array is NOT modified (immutable)
*/


/*
==================================================
🧠 MAP (TRANSFORMATION)
==================================================
*/

const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled);
// [2,4,6] → WHY?
// map runs function on EACH element
// returns new array with results


/*
🔥 KEY IDEA:
map = SAME LENGTH array
*/


/*
==================================================
📌 FILTER (SELECTION)
==================================================
*/

const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(n => n % 2 === 0);

console.log(evens);
// [2,4] → WHY?
// filter keeps elements where condition is true


/*
🔥 KEY IDEA:
filter = SUBSET of array
*/


/*
==================================================
📌 REDUCE (MOST IMPORTANT)
==================================================
*/

const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
// 10 → WHY?
// acc = accumulator (stores result)
// curr = current element
// 0 = initial value


/*
STEP FLOW:
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
*/


/*
🔥 KEY IDEA:
reduce = ONE VALUE from array
*/


/*
==================================================
📌 MAP vs FILTER vs REDUCE
==================================================

map    → modify each element
filter → pick elements
reduce → combine elements
*/


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: Map vs forEach
const res = nums.map(n => n * 2);
// map returns array

nums.forEach(n => n * 2);
// undefined → WHY?
// forEach does not return anything


// Q2: Chain methods
const result = [1,2,3,4]
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);
// [20,40] → WHY?
// filter → [2,4]
// map → [20,40]


// Q3: Reduce to object
const users = ["Hassan", "Ali"];

const obj = users.reduce((acc, name) => {
  acc[name] = true;
  return acc;
}, {});

console.log(obj);
// { Hassan: true, Ali: true }
// WHY?
// building object dynamically


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Total cart value
const cart = [
  { price: 100 },
  { price: 200 },
  { price: 300 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);
// 600 → WHY?
// reduce accumulates total


// Example 2: Extract names
const people = [
  { name: "Hassan" },
  { name: "Ali" }
];

const names = people.map(p => p.name);

console.log(names);
// ["Hassan", "Ali"] → WHY?
// map transforms objects → values


// Example 3: Filter active users
const usersList = [
  { active: true },
  { active: false }
];

const activeUsers = usersList.filter(u => u.active);

console.log(activeUsers);
// only active → WHY?
// condition filters


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Missing return in map
const wrong = [1,2,3].map(n => {
  n * 2;
});

console.log(wrong);
// [undefined, undefined, undefined]
// WHY?
// no return → undefined


// ❗ Reduce without initial value
const r = [1,2,3].reduce((a,b) => a+b);

console.log(r);
// 6 → BUT risky
// WHY?
// first element used as initial value


/*
==================================================
🧩 ADVANCED PATTERNS
==================================================
*/

// 1. Flatten array
const nested = [[1,2], [3,4]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
// [1,2,3,4]


// 2. Count frequency
const items = ["a", "b", "a"];

const freq = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(freq);
// { a: 2, b: 1 }


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

[1,2,3].map(n => n + 1);
// ?

[1,2,3,4].filter(n => n > 2);
// ?

[1,2,3].reduce((a,b) => a*b, 1);
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

map → transform → same length
filter → condition → subset
reduce → single value

map needs return
filter needs boolean
reduce needs accumulator

chain methods → powerful

reduce can return:
- number
- object
- array
*/