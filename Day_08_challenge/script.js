// TASK 1

// const name = "Gaurav";
// const age = 19;

// const introduction = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(introduction);

// TASK 2
// const name = "  Gaurav";
// const age = 19;

// const introduction = `Hello, my name is ${name}.
// I am ${age} years old.
// I enjoy reading books, hiking, and coding.`;

// console.log(introduction);


// // TASK 3
// const numbers = [10, 20, 30, 40, 50];

// const [first, second] = numbers;

// console.log(first);  
// console.log(second);


// // TASK 4
// const book = {
//     title: "bhagwat geeta",
//     author: "shri krishna",
//     year: 0001
//   };
  
//   const { title, author, year } = book;
//   console.log(title);  
//   console.log(author);  
//   console.log(year);  
  

// // TASK 5
// const originalArray = [1, 2, 3, 4, 5];
// const additionalElement = 6;

// const newArray = [...originalArray, additionalElement];

// console.log(newArray); 

// TASK 6
// function sumAll(...numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   console.log(sumAll(1, 2, 3));       
//   console.log(sumAll(4, 5, 6, 7));    
//   console.log(sumAll(10, 20, 30, 40)); 
  
// // TASK 7
// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiply(5, 3)); // Output: 15
//   console.log(multiply(5));    // Output: 5
  

// TASK 8
// const name = "Gaurav";
// const age = 18;

// const person = {
//   name,
//   age,
//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   },
//   celebrateBirthday() {
//     this.age += 1;
//     return `Happy Birthday! I am now ${this.age} years old.`;
//   }
// };

// console.log(person);
// console.log(person.greet());
// console.log(person.celebrateBirthday());
// console.log(person.greet());

// TASK 9
// const key1 = 'firstName';
// const key2 = 'lastName';

// const person = {
//   [key1]: ' Gaurav',
//   [key2]: 'sain',
//   age: 19
// };

// console.log(person);
