/******************************************************
 * ⏳ CALLBACKS IN JAVASCRIPT (WITH WHY EXPLANATIONS)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Callback = function passed as argument to another function

Used for:
- Async operations
- Event handling
- Reusability

Key Idea:
"Call me back later"
*/


/*
==================================================
🧠 BASIC CALLBACK (SYNC)
==================================================
*/

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Hassan", sayBye);

/*
Output:
Hello Hassan
Goodbye

WHY?
- callback function passed
- executed after main function work
*/


/*
==================================================
📌 CALLBACK WITH ANONYMOUS FUNCTION
==================================================
*/

greet("Ali", function () {
  console.log("Callback executed");
});

/*
WHY?
- function created inline
- no need to define separately
*/


/*
==================================================
📌 ASYNC CALLBACK (setTimeout)
==================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 1000);

console.log("End");

/*
Output:
Start
End
Async Task Done

WHY?
- setTimeout runs in Web API
- callback executed later
*/


/*
==================================================
📌 REAL-WORLD SIMULATION (API CALL)
==================================================
*/

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(function (data) {
  console.log(data);
});

/*
WHY?
- async operation finishes
- callback handles result
*/


/*
==================================================
🔥 CALLBACK HELL (INTERVIEW IMPORTANT)
==================================================
*/

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);

/*
WHY?
- nested callbacks
- hard to read & maintain
- known as "callback hell" or "pyramid of doom"
*/


/*
==================================================
📌 ERROR-FIRST CALLBACK (NODE STYLE)
==================================================
*/

function getUser(id, callback) {
  let error = null;
  let user = { id: id, name: "Hassan" };

  callback(error, user);
}

getUser(1, (err, user) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(user);
  }
});

/*
WHY?
- first param = error
- second = data
- standard Node.js pattern
*/


/*
==================================================
🔥 FAANG INTERVIEW Q&A
==================================================
*/

// Q1: What is callback?
// function passed to another function


// Q2: Sync vs Async callback
function sync(cb) {
  cb();
}

function async(cb) {
  setTimeout(cb, 0);
}

/*
WHY?
- sync → immediate execution
- async → delayed execution
*/


// Q3: Predict output
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

/*
Output:
A
C
B

WHY?
- async callback runs later
*/


/*
==================================================
💻 REAL-WORLD EXAMPLES
==================================================
*/

// Example 1: Button click simulation
function onClick(handler) {
  handler();
}

onClick(() => console.log("Button clicked"));
// WHY?
// callback used for event handling


// Example 2: Data processing
function processData(data, callback) {
  let result = data * 2;
  callback(result);
}

processData(5, res => console.log(res));
// 10 → WHY?
// callback receives processed data


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Callback called multiple times
function bad(cb) {
  cb();
  cb();
}

bad(() => console.log("Called"));
// runs twice → WHY?
// no control → risky


// ❗ Callback never called
function never(cb) {
  // forgot to call cb
}

// leads to hanging logic


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

function test(cb) {
  console.log("Start");
  cb();
  console.log("End");
}

test(() => console.log("Callback"));
// ?

// Predict:

setTimeout(() => console.log("X"), 0);
console.log("Y");
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Callback = function passed as argument

Sync → immediate
Async → delayed

Used in:
- setTimeout
- events
- API calls

Problem:
❗ callback hell

Solution:
→ Promises
→ async/await
*/