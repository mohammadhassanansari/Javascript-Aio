/******************************************************
 * 🤝 PROMISES IN JAVASCRIPT (DEEP DIVE + WHY)
 ******************************************************/

/*
==================================================
🚀 QUICK SUMMARY
==================================================

Promise = object representing future result

States:
1. Pending
2. Fulfilled (resolved)
3. Rejected

Methods:
.then() → success
.catch() → error
.finally() → always runs

🔥 KEY:
Promises run in MICROTASK QUEUE
*/


/*
==================================================
🧠 BASIC PROMISE
==================================================
*/

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));

/*
Output:
Success

WHY?
- resolve → triggers .then
- reject → triggers .catch
*/


/*
==================================================
📌 ASYNC SIMULATION
==================================================
*/

function fetchData() {
  return new Promise((resolve) => {
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
- async operation handled later
- .then runs when resolved
*/


/*
==================================================
📌 PROMISE CHAINING
==================================================
*/

Promise.resolve(2)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(result => console.log(result));

/*
Output:
12

WHY?
- each .then gets previous result
- chain transforms data step-by-step
*/


/*
==================================================
📌 ERROR HANDLING
==================================================
*/

Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong");
  })
  .catch(err => console.log(err.message));

/*
Output:
Something went wrong

WHY?
- error inside .then → goes to .catch
*/


/*
==================================================
📌 FINALLY
==================================================
*/

Promise.resolve("Done")
  .finally(() => console.log("Cleanup"))
  .then(res => console.log(res));

/*
Output:
Cleanup
Done

WHY?
- finally runs always
- does not change result
*/


/*
==================================================
🔥 PROMISE vs CALLBACK
==================================================

// Callback hell ❌
step1(() => {
  step2(() => {
    step3(() => {});
  });
});

// Promise chaining ✅
step1()
  .then(step2)
  .then(step3);

/*
WHY?
- Promises flatten nested callbacks
- easier to read
*/


/*
==================================================
📌 PROMISE METHODS (IMPORTANT)
==================================================
*/

// 1. Promise.all
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(res => console.log(res));

/*
[1,2] → WHY?
- waits for all promises
- fails if ANY rejects
*/


// 2. Promise.race
Promise.race([
  new Promise(res => setTimeout(() => res("A"), 100)),
  new Promise(res => setTimeout(() => res("B"), 50))
]).then(res => console.log(res));

/*
"B" → WHY?
- fastest promise wins
*/


// 3. Promise.allSettled
Promise.allSettled([
  Promise.resolve("OK"),
  Promise.reject("Fail")
]).then(res => console.log(res));

/*
WHY?
- returns status of ALL promises
*/


// 4. Promise.any
Promise.any([
  Promise.reject("Err1"),
  Promise.resolve("Success")
]).then(res => console.log(res));

/*
"Success" → WHY?
- first fulfilled promise wins
*/


/*
==================================================
🔥 MICROTASK BEHAVIOR (IMPORTANT)
==================================================
*/

console.log("Start");

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/*
Output:
Start
End
Promise

WHY?
- Promise runs in microtask queue
- after sync code
*/


/*
==================================================
💻 REAL-WORLD EXAMPLE
==================================================
*/

// API chain simulation
function getUser() {
  return Promise.resolve({ id: 1 });
}

function getOrders(user) {
  return Promise.resolve(["Order1", "Order2"]);
}

getUser()
  .then(user => getOrders(user))
  .then(orders => console.log(orders));

/*
WHY?
- chaining dependent async calls
*/


/*
==================================================
⚠️ PITFALLS
==================================================
*/

// ❗ Missing return in chain
Promise.resolve(5)
  .then(num => {
    num * 2;
  })
  .then(res => console.log(res));

// undefined → WHY?
// no return → next .then gets undefined


// ❗ Multiple .then vs chaining
Promise.resolve(5).then(x => console.log(x));
Promise.resolve(5).then(x => console.log(x));
// independent calls


/*
==================================================
🧩 PRACTICE
==================================================

// Predict:

Promise.resolve(1)
  .then(x => x + 1)
  .then(x => console.log(x));
// ?

// Predict:

Promise.reject("Error")
  .then(() => console.log("A"))
  .catch(err => console.log(err));
// ?

*/


/*
==================================================
📌 CHEAT SHEET (WITH WHY)
==================================================

Promise = future value

States:
pending → fulfilled/rejected

.then → success
.catch → error
.finally → always

Chain → passes result

Microtask queue → runs before setTimeout

Methods:
all → all success
race → fastest
allSettled → all results
any → first success
*/