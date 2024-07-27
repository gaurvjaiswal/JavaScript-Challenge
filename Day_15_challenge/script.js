// TASK1
// function createAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// const add5 = createAdder(5);
// const result = add5(10);  
// console.log("Result:", result);

// // TASk2
// function createCounter() {
//     let counter = 0;

//     return {
//         increment: function() {
//             counter++;
//         },
//         getValue: function() {
//             return counter;
//         }
//     };
// }

// const myCounter = createCounter();

// myCounter.increment();
// console.log("Current value:", myCounter.getValue()); // Should print 1

// myCounter.increment();
// myCounter.increment();
// console.log("Current value:", myCounter.getValue()); // Should print 3

// TASK3
// function createUniqueIdGenerator() {
//     let lastId = 0;

//     return function() {
//         lastId++;
//         return lastId;
//     };
// }

// const generateUniqueId = createUniqueIdGenerator();

// console.log("Unique ID 1:", generateUniqueId()); // Should print 1
// console.log("Unique ID 2:", generateUniqueId()); // Should print 2
// console.log("Unique ID 3:", generateUniqueId()); // Should print 3


// // TASk 4
// function createGreeter(name) {
//     return function() {
//         console.log(`Hello, ${name}!`);
//     };
// }

// const greetJohn = createGreeter("Gaurav");
// const greetJane = createGreeter("rahul");

// greetJohn(); // Should print "Hello, John!"
// greetJane(); // Should print "Hello, Jane!"


// TASk 5
// const functions = [];

// for (let i = 0; i < 5; i++) {
//     functions.push(
//         (function(index) {
//             return function() {
//                 console.log(index);
//             };
//         })(i)
//     );
// }

// // Test the functions
// functions[0](); 
// functions[1](); 
// functions[2](); 
// functions[3](); 
// functions[4]();  


// TASK 6
// function createItemManager() {
//     let items = [];

//     return {
//         addItem: function(item) {
//             items.push(item);
//             console.log(`${item} added.`);
//         },
//         removeItem: function(item) {
//             const index = items.indexOf(item);
//             if (index !== -1) {
//                 items.splice(index, 1);
//                 console.log(`${item} removed.`);
//             } else {
//                 console.log(`${item} not found.`);
//             }
//         },
//         listItems: function() {
//             if (items.length === 0) {
//                 console.log("No items in the list.");
//             } else {
//                 console.log("Items in the list:");
//                 items.forEach(item => console.log(item));
//             }
//         }
//     }
// }

// const itemManager = createItemManager();

// itemManager.addItem("Apple");
// itemManager.addItem("Banana");
// itemManager.listItems();
// itemManager.removeItem("Apple");
// itemManager.listItems();
// itemManager.removeItem("Orange");


// TASK7
// function memoize(fn) {
//     const cache = {};

//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (cache[key] !== undefined) {
//             console.log(`Fetching from cache for args: ${args}`);
//             return cache[key];
//         } else {
//             const result = fn(...args);
//             cache[key] = result;
//             console.log(`Computing result for args: ${args}`);
//             return result;
//         }
//     };
// }

// // Example usage
// function slowFunction(num) {
//     // Simulate a slow computation
//     for (let i = 0; i < 1e6; i++) {}
//     return num * 2;
// }

// const memoizedSlowFunction = memoize(slowFunction);

// console.log(memoizedSlowFunction(5));  
// console.log(memoizedSlowFunction(5));  
// console.log(memoizedSlowFunction(10));  
// console.log(memoizedSlowFunction(10));  

// TASK 8
// function memoize(fn) {
//     const cache = {};

//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (cache[key] !== undefined) {
//             console.log(`Fetching from cache for args: ${args}`);
//             return cache[key];
//         } else {
//             const result = fn(...args);
//             cache[key] = result;
//             console.log(`Computing result for args: ${args}`);
//             return result;
//         }
//     };
// }

// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// }

// const memoizedFactorial = memoize(factorial);

// console.log(memoizedFactorial(5));  // Computes and returns 120
// console.log(memoizedFactorial(5));  // Fetches from cache and returns 120
// console.log(memoizedFactorial(6));  // Computes and returns 720 (using cached value for factorial(5))
// console.log(memoizedFactorial(6));  // Fetches from cache and returns 720
