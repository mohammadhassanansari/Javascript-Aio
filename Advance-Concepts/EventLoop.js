/******************************************************
 * 🔁 EVENT LOOP IN JAVASCRIPT (DEEP DIVE + WHY)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

JavaScript is:
→ Single-threaded
→ Non-blocking (thanks to Web APIs + Event Loop)

Main Parts:
1. Call Stack
2. Web APIs (Browser / Node)
3. Callback Queue (Macrotask Queue)
4. Microtask Queue (Promises)
5. Event Loop

🔥 RULE:
Microtasks run BEFORE macrotasks
*/


/*
==================================================
🧠 CALL STACK (EXECUTION)
==================================================
*/

function one() {
  console.log("One");
}

function two() {
  console.log("Two");
}

one();
two();

/*
Output:
One
Two

WHY?
- Functions pushed to call stack
- Executed one by one (LIFO)
*/


/*
==================================================
📌 SETTIMEOUT (MACROTASK)
==================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Output:
Start
End
Timeout

WHY?
- setTimeout goes to Web API
- then to Callback Queue
- Event Loop pushes it AFTER stack is empty
*/


/*
==================================================
📌 PROMISE (MICROTASK)
==================================================
*/

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Output:
Start
End
Promise

WHY?
- Promise.then goes to Microtask Queue
- runs AFTER current code BUT BEFORE macrotasks
*/


/*
==================================================
🔥 MICROTASK vs MACROTASK
==================================================
*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/*
Output:
Start
End
Promise
Timeout

WHY?
1. Sync code runs first
2. Microtasks (Promise)
3. Macrotasks (setTimeout)
*/


/*
==================================================
📌 MULTIPLE MICROTASKS
==================================================
*/

Promise.resolve().then(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));

/*
Output:
Microtask 1
Microtask 2

WHY?
- Microtasks executed in order
- before any macrotask
*/


/*
==================================================
📌 NESTED EVENT LOOP
==================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Inner Promise");
  });
}, 0);

console.log("End");

/*
Output:
Start
End
Timeout 1
Inner Promise

WHY?
- Timeout runs (macrotask)
- inside it → Promise creates microtask
- microtask runs immediately after current macrotask
*/


/*
==================================================
🔥 FAANG INTERVIEW QUESTIONS
==================================================
*/

// Q1:
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

/*
Output:
A
D
C
B

WHY?
Sync → Microtask → Macrotask
*/


// Q2:
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");
  Promise.resolve().then(() => console.log("4"));
});

console.log("5");

/*
Output:
1
5
3
4
2

WHY?
- 3 runs (microtask)
- then 4 (nested microtask)
- then macrotask (2)
*/


/*
==================================================
📌 ASYNC / AWAIT (MICROTASK BASED)
==================================================
*/

async function test() {
  console.log("Start");

  await Promise.resolve();

  console.log("After await");
}

test();
console.log("Outside");

/*
Output:
Start
Outside
After await

WHY?
- await pauses function
- rest goes to microtask queue
*/


/*
==================================================
💻 REAL-WORLD EXAMPLE
==================================================
*/

// Example: API simulation
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

fetchData().then(data => console.log(data));

console.log("Request sent");

/*
Output:
Request sent
Data received

WHY?
- async operation handled by Web API
- callback runs later
*/


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ setTimeout is NOT guaranteed exact time
setTimeout(() => console.log("Delay"), 0);

/*
WHY?
- runs only after stack is empty
*/


// ❗ Blocking the thread
while (true) {}

/*
WHY?
- infinite loop blocks call stack
- event loop never runs
*/


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

console.log("X");

setTimeout(() => console.log("Y"), 0);

Promise.resolve().then(() => console.log("Z"));

console.log("W");

// ?

// Predict:

setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => {
  console.log("B");
  setTimeout(() => console.log("C"), 0);
});

// ?


*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

JS = single-threaded

Call Stack → executes code

Web APIs → handle async

Microtask Queue:
- Promise.then
- async/await

Macrotask Queue:
- setTimeout
- setInterval

Execution Order:
1. Sync
2. Microtasks
3. Macrotasks

Event Loop:
→ moves tasks when stack is empty
*/