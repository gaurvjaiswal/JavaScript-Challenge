// TASK 1
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
// };

// console.log(book);


// TASK 2
// console.log("Title: " + book.title);
// console.log("Author: " + book.author);

// // TASK 3
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getDescription: function() {
//         return this.title + " by " + this.author;
//     }
// };

// console.log(book.getDescription());


// TASK 4
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getDescription: function() {
//         return this.title + " by " + this.author;
//     },
//     updateYear: function(newYear) {
//         this.year = newYear;
//     }
// };

// book.updateYear(2024);
// console.log(book);


// TASK 5
// let library = {
//     name: "City Library",
//     books: [
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             year: 1949
//         },
//         {
//             title: "Pride and Prejudice",
//             author: "Jane Austen",
//             year: 1813
//         }
//     ]
// };

// console.log(library);


// TASK 6
// console.log("Library Name: " + library.name);

// library.books.forEach(function(book) {
//     console.log("Book Title: " + book.title);
// });


// // TASK 7
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getDescription: function() {
//         return this.title + " by " + this.author;
//     },
//     updateYear: function(newYear) {
//         this.year = newYear;
//     },
//     getTitleAndYear: function() {
//         return this.title + " (" + this.year + ")";
//     }
// };

// console.log(book.getTitleAndYear());


// TASK 8

// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getDescription: function() {
//         return this.title + " by " + this.author;
//     },
//     updateYear: function(newYear) {
//         this.year = newYear;
//     },
//     getTitleAndYear: function() {
//         return this.title + " (" + this.year + ")";
//     }
// };

// for (let property in book) {
//     if (book.hasOwnProperty(property)) {
//         console.log(property + ": " + book[property]);
//     }
// }


// TASK 9
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getDescription: function() {
//         return this.title + " by " + this.author;
//     },
//     updateYear: function(newYear) {
//         this.year = newYear;
//     },
//     getTitleAndYear: function() {
//         return this.title + " (" + this.year + ")";
//     }
// };

// console.log("Keys:", Object.keys(book));
// console.log("Values:", Object.values(book));
