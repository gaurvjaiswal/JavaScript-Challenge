// TASK 1
// function throwErrorFunction() {
//     throw new Error("An intentional error occurred!");
// }

// try {
//     throwErrorFunction();
// } catch (error) {
//     console.error("Caught an exception: " + error.message);
// }


// // TASK 2
// function divideNumbers(numerator, denominator) {
//     if (denominator === 0) {
//         throw new Error("Division by zero is not allowed!");
//     }
//     return numerator / denominator;
// }

// try {
//     let result = divideNumbers(10, 0);  
//     console.log("Result: " + result);
// } catch (error) {
//     console.error("Caught an exception: " + error.message);
// }

// // TASK 3
// function testTryCatchFinally() {
//     try {
//         console.log("In the try block.");
//         throw new Error("An error occurred!");
//         console.log("This line will not be executed.");
//     } catch (error) {
//         console.log("In the catch block.");
//         console.error("Caught an exception: " + error.message);
//     } finally {
//         console.log("In the finally block.");
//     }
// }

// testTryCatchFinally();



// TASK 4
// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError";
//     }
// }

// function throwErrorFunction() {
//     throw new CustomError("This is a custom error!");
// }

// try {
//     throwErrorFunction();
// } catch (error) {
//     if (error instanceof CustomError) {
//         console.error("Caught a CustomError: " + error.message);
//     } else {
//         console.error("Caught an unexpected error: " + error.message);
//     }
// }


// TASK 5
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function validateInput(input) {
//     if (input.trim() === "") {
//         throw new ValidationError("Input cannot be empty or whitespace only.");
//     }
//     return true;
// }

// try {
//     let userInput = "";  
//     validateInput(userInput);
//     console.log("User input is valid.");
// } catch (error) {
//     if (error instanceof ValidationError) {
//         console.error("Validation Error: " + error.message);
//     } else {
//         console.error("Unexpected Error: " + error.message);
//     }
// }


// // TASK 6
// function randomPromise() {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();
//         if (random < 0.5) {
//             resolve("Promise resolved successfully!");
//         } else {
//             reject(new Error("Promise rejected!"));
//         }
//     });
// }

// randomPromise()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Caught an error: " + error.message);
//     });


// // TASK 7
// function randomPromise() {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();
//         if (random < 0.5) {
//             resolve("Promise resolved successfully!");
//         } else {
//             reject(new Error("Promise rejected!"));
//         }
//     });
// }

// async function handleRandomPromise() {
//     try {
//         const message = await randomPromise();
//         console.log(message);
//     } catch (error) {
//         console.error("Caught an error: " + error.message);
//     }
// }

// handleRandomPromise();



// TASK 8
// fetch('https://invalid-url.com/data')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('Fetch error:', error.message);
//     });


// TASK 9
// async function fetchData() {
//     try {
//         const response = await fetch('https://invalid-url.com/data');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log('Data received:', data);
//     } catch (error) {
//         console.error('Fetch error:', error.message);
//     }
// }

// fetchData();
