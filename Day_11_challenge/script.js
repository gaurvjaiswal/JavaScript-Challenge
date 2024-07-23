// TASK 1
// const delayedMessage = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello ");
//     }, 2000);  
//   });
  
//   delayedMessage.then((message) => {
//     console.log(message);
//   });
  

// TASK 2
// Create a promise that rejects with an error message after a 2-second timeout
// const delayedError = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("This is an error message after 2 seconds!"));
//     }, 5000);  
//   });
  
   
//   delayedError.catch((error) => {
//     console.error("Caught an error:", error.message);
//   });
  

// TASK 3
// Simulate fetching data from a server with a delay
// function fetchData(delay, message) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(message);
//       }, delay);
//     });
//   }
  
//   fetchData(1000, "Fetching data from server...")
//     .then((message) => {
//       console.log(message);
//       return fetchData(2000, "Processing data...");
//     })
//     .then((message) => {
//       console.log(message);
//       return fetchData(1500, "Data processed successfully!");
//     })
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     });
  

// TASK 4

// async function logResolvedValue() {
//     const promise = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("This is the resolved value!");
//       }, 2000); 
//     });
  
//     const resolvedValue = await promise;

//     console.log(resolvedValue);
//   }
  
//   logResolvedValue();
  

// TASK 5
// async function handleRejectedPromise() {
//     const promise = new Promise((_, reject) => {
//       setTimeout(() => {
//         reject(new Error("This is an error message after 2 seconds!"));
//       }, 2000);  
//     });
  
//     try {
//       const result = await promise;
//       console.log(result);
//     } catch (error) {
//       console.error("Caught an error:", error.message);
//     }
//   }
  
//   handleRejectedPromise();
  


// // TASK 6
// fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });



// TASK 7
// Define an async function to fetch data from a public API and log the response
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }
  
//       const data = await response.json();
  
//       console.log(data);
//     } catch (error) {
//       console.error('There has been a problem with your fetch operation:', error);
//     }
//   }
  
//   fetchData();
  

// TASK 8
// Create a function that returns a promise that resolves after a given time with a given value
// function createPromise(delay, value) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   }
  
//   const promise1 = createPromise(1000, 'First promise resolved!');
//   const promise2 = createPromise(2000, 'Second promise resolved!');
//   const promise3 = createPromise(3000, 'Third promise resolved!');
  
//   Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//       console.log('All promises resolved:', values);
//     })
//     .catch((error) => {
//       console.error('One of the promises rejected:', error);
//     });
  

// TASK 9
// function createPromise(delay, value) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   }
  
//   const promise1 = createPromise(1000, 'First promise resolved!');
//   const promise2 = createPromise(2000, 'Second promise resolved!');
//   const promise3 = createPromise(1500, 'Third promise resolved!');
  
//   Promise.race([promise1, promise2, promise3])
//     .then((value) => {
//       console.log('First promise resolved:', value);
//     })
//     .catch((error) => {
//       console.error('One of the promises rejected:', error);
//     });
  