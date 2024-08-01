// TASK 1
// function saveToLocalStorage(key, value) {
//     localStorage.setItem(key, value);
//     console.log(`Saved ${value} to local storage with key ${key}`);
// }

// function getFromLocalStorage(key) {
//     const value = localStorage.getItem(key);
//     console.log(`Retrieved value from local storage with key ${key}: ${value}`);
//     return value;
// }

// const key = 'myKey';
// const value = 'Hello, World!';

// saveToLocalStorage(key, value);

// const retrievedValue = getFromLocalStorage(key);

// TASK 2
// function saveObjectToLocalStorage(key, obj) {
//     const jsonString = JSON.stringify(obj);
//     localStorage.setItem(key, jsonString);
//     console.log(`Saved object to local storage with key ${key}:`, obj);
// }

// function getObjectFromLocalStorage(key) {
//     const jsonString = localStorage.getItem(key);
//     if (jsonString) {
//         const obj = JSON.parse(jsonString);
//         console.log(`Retrieved object from local storage with key ${key}:`, obj);
//         return obj;
//     } else {
//         console.log(`No object found in local storage with key ${key}`);
//         return null;
//     }
// }

// const key = 'myObjectKey';
// const myObject = {
//     name: 'John Doe',
//     age: 30,
//     job: 'Developer'
// };

// saveObjectToLocalStorage(key, myObject);

// const retrievedObject = getObjectFromLocalStorage(key);

// // TASK 3
// // Function to save user input to local storage
// function saveUserInput(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;

//     const userInput = {
//         name: name,
//         email: email
//     };

//     localStorage.setItem('userInput', JSON.stringify(userInput));
//     console.log('Saved user input to local storage:', userInput);
//     displayUserInput(); // Display saved data
// }

// // Function to retrieve and display user input from local storage
// function displayUserInput() {
//     const jsonString = localStorage.getItem('userInput');
//     if (jsonString) {
//         const userInput = JSON.parse(jsonString);
//         document.getElementById('displayName').textContent = `Name: ${userInput.name}`;
//         document.getElementById('displayEmail').textContent = `Email: ${userInput.email}`;
//     }
// }

// // Execute displayUserInput on page load
// window.onload = function() {
//     displayUserInput();
// };



//  TASK 4
// // Function to save an item to local storage
// function saveItem(key, value) {
//     localStorage.setItem(key, value);
//     console.log(`Saved ${key}: ${value} to local storage`);
// }

// // Function to log the entire local storage content
// function logLocalStorageContent() {
//     console.log('Local Storage Content:');
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//         console.log(`${key}: ${value}`);
//     }
// }

// // Function to remove an item from local storage
// function removeItemFromLocalStorage(key) {
//     console.log('Local storage content before removal:');
//     logLocalStorageContent();

//     localStorage.removeItem(key);
//     console.log(`Removed item with key ${key} from local storage`);

//     console.log('Local storage content after removal:');
//     logLocalStorageContent();
// }

// // Example usage
// window.onload = function() {
//     const key = 'testKey';
//     const value = 'testValue';

//     // Save an item to local storage
//     saveItem(key, value);

//     // Remove the item from local storage
//     removeItemFromLocalStorage(key);
// };

// TASK 5
        // // Function to save value to session storage
        // function saveToSessionStorage(key, value) {
        //     sessionStorage.setItem(key, value);
        //     console.log(`Saved ${value} to session storage with key ${key}`);
        // }

        // // Function to retrieve value from session storage
        // function getFromSessionStorage(key) {
        //     const value = sessionStorage.getItem(key);
        //     console.log(`Retrieved value from session storage with key ${key}: ${value}`);
        //     return value;
        // }

        // // Example usage
        // window.onload = function() {
        //     const key = 'myKey';
        //     const value = 'Hello, Session Storage!';

        //     // Save value to session storage
        //     saveToSessionStorage(key, value);

        //     // Retrieve value from session storage
        //     const retrievedValue = getFromSessionStorage(key);
        // };


// TASK 6

    // // Function to save object to session storage
    // function saveObjectToSessionStorage(key, obj) {
    //     const jsonString = JSON.stringify(obj);
    //     sessionStorage.setItem(key, jsonString);
    //     console.log(`Saved object to session storage with key ${key}:`, obj);
    // }

    // // Function to retrieve and parse object from session storage
    // function getObjectFromSessionStorage(key) {
    //     const jsonString = sessionStorage.getItem(key);
    //     if (jsonString) {
    //         const obj = JSON.parse(jsonString);
    //         console.log(`Retrieved object from session storage with key ${key}:`, obj);
    //         return obj;
    //     } else {
    //         console.log(`No object found in session storage with key ${key}`);
    //         return null;
    //     }
    // }

    // // Example usage
    // window.onload = function() {
    //     const key = 'myObjectKey';
    //     const myObject = {
    //         name: 'John Doe',
    //         age: 30,
    //         job: 'Developer'
    //     };

    //     // Save object to session storage
    //     saveObjectToSessionStorage(key, myObject);

    //     // Retrieve and parse object from session storage
    //     const retrievedObject = getObjectFromSessionStorage(key);
    // };
 

// TASK 7

// // Function to save user input to session storage
// function saveUserInput(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;

//     const userInput = {
//         name: name,
//         email: email
//     };

//     sessionStorage.setItem('userInput', JSON.stringify(userInput));
//     console.log('Saved user input to session storage:', userInput);
//     displayUserInput(); // Display saved data
// }

// // Function to retrieve and display user input from session storage
// function displayUserInput() {
//     const jsonString = sessionStorage.getItem('userInput');
//     if (jsonString) {
//         const userInput = JSON.parse(jsonString);
//         document.getElementById('displayName').textContent = `Name: ${userInput.name}`;
//         document.getElementById('displayEmail').textContent = `Email: ${userInput.email}`;
//     }
// }

// // Execute displayUserInput on page load
// window.onload = function() {
//     displayUserInput();
// };


// TASK 8
        // Function to save an item to session storage
        // function saveItem(key, value) {
        //     sessionStorage.setItem(key, value);
        //     console.log(`Saved ${key}: ${value} to session storage`);
        // }

        // // Function to log the entire session storage content
        // function logSessionStorageContent() {
        //     console.log('Session Storage Content:');
        //     for (let i = 0; i < sessionStorage.length; i++) {
        //         const key = sessionStorage.key(i);
        //         const value = sessionStorage.getItem(key);
        //         console.log(`${key}: ${value}`);
        //     }
        // }

        // // Function to remove an item from session storage
        // function removeItemFromSessionStorage(key) {
        //     console.log('Session storage content before removal:');
        //     logSessionStorageContent();

        //     sessionStorage.removeItem(key);
        //     console.log(`Removed item with key ${key} from session storage`);

        //     console.log('Session storage content after removal:');
        //     logSessionStorageContent();
        // }

        // // Example usage
        // window.onload = function() {
        //     const key = 'testKey';
        //     const value = 'testValue';

        //     // Save an item to session storage
        //     saveItem(key, value);

        //     // Remove the item from session storage
        //     removeItemFromSessionStorage(key);
        // };


        // TASK 9
         // Function to save value to both local storage and session storage
        //  function saveToLocalAndSessionStorage(key, value) {
        //     localStorage.setItem(key, value);
        //     sessionStorage.setItem(key, value);
        //     console.log(`Saved ${value} to local storage and session storage with key ${key}`);
        // }

        // // Function to retrieve and log value from both local storage and session storage
        // function retrieveAndLogFromStorages(key) {
        //     const localValue = localStorage.getItem(key);
        //     const sessionValue = sessionStorage.getItem(key);
        //     console.log(`Retrieved value from local storage with key ${key}: ${localValue}`);
        //     console.log(`Retrieved value from session storage with key ${key}: ${sessionValue}`);
        // }

        // // Example usage
        // window.onload = function() {
        //     const key = 'exampleKey';
        //     const value = 'exampleValue';

        //     // Save value to both storages
        //     saveToLocalAndSessionStorage(key, value);

        //     // Retrieve and log value from both storages
        //     retrieveAndLogFromStorages(key);
        // };



// TASK 10
// // function clearAllStorage() {
//     // Clear local storage
//     localStorage.clear();
//     console.log('Cleared all data from local storage');

//     // Clear session storage
//     sessionStorage.clear();
//     console.log('Cleared all data from session storage');

//     // Verify that both storages are empty
//     verifyStorageIsEmpty();
// }

// // Function to verify that both storages are empty
// function verifyStorageIsEmpty() {
//     if (localStorage.length === 0) {
//         console.log('Local storage is empty');
//     } else {
//         console.log('Local storage is not empty');
//     }

//     if (sessionStorage.length === 0) {
//         console.log('Session storage is empty');
//     } else {
//         console.log('Session storage is not empty');
//     }
// }

// // Example usage
// window.onload = function() {
//     // Add some test data to storages
//     localStorage.setItem('testKey', 'testValue');
//     sessionStorage.setItem('testKey', 'testValue');

//     // Clear all data from both storages and verify
//     clearAllStorage();
// };