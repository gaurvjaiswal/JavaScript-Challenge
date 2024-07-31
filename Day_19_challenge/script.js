// // TASK 1
// const text = "JavaScript is a versatile language. Many people use JavaScript for web development. Do you like JavaScript?";
// const regex = /javascript/gi;
// const matches = text.match(regex);

// console.log(matches);


// TASK 2
// const text = "The year is 2024. My phone number is 123-456-7890 and my postal code is 98765.";
// const regex = /\d+/g;
// const matches = text.match(regex);
// console.log(matches);

// TASK 3
// const text = "JavaScript is a versatile Language. Many People use JavaScript for Web development.";
// const regex = /\b[A-Z][a-z]*\b/g;
// const matches = text.match(regex);
// console.log(matches);


// TASK 4
// const text = "The year is 2024. My phone number is 123-456-7890 and my postal code is 98765.";
// const regex = /\d+/g;
// const matches = text.match(regex);
// console.log(matches);


// TASK 5
// const text = "My phone number is (123) 456-7890.";

//  const regex = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/g;

// const matches = text.matchAll(regex);

// for (const match of matches) {
//     console.log(`Full match: ${match[0]}`);
//     console.log(`Area code: ${match[1]}`);
//     console.log(`Central office code: ${match[2]}`);
//     console.log(`Line number: ${match[3]}`);
// }

// TASK 6
// const text = "My email address is example.user@domain.com.";
//  const regex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
// const matches = text.matchAll(regex);
// for (const match of matches) {
//     console.log(`Full match: ${match[0]}`);
//     console.log(`Username: ${match[1]}`);
//     console.log(`Domain: ${match[2]}`);
// }


// TASK 7
// const text = "My email address is example.user@domain.com.";

//  const regex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

// const matches = text.matchAll(regex);

// for (const match of matches) {
//     console.log(`Full match: ${match[0]}`);
//     console.log(`Username: ${match[1]}`);
//     console.log(`Domain: ${match[2]}`);
// }


// // TASK 8
// const text = "This is a test string with the word end.";

// const regex = /\b\w+\b$/g;

// const matches = text.match(regex);

// console.log(matches);
