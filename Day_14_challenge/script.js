// TASk 1
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// // Create an instance of the Person class
// const personInstance = new Person("GAURAV", 19);

// // Log the greeting message
// console.log(personInstance.greeting());

// TASK 2
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }
// }

// // Create an instance of the Person class
// const personInstance = new Person("Alice", 30);

// // Log the greeting message
// console.log(personInstance.greeting());

// // Update the age and log the updated age
// personInstance.updateAge(31);


// TASK 3
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return `My student ID is ${this.studentId}.`;
//     }
// }

// // Create an instance of the Student class
// const studentInstance = new Student("Gaurav", 19, "01111");

// // Log the student ID
// console.log(studentInstance.getStudentId());


// TASK 4
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     getStudentId() {
//         return `My student ID is ${this.studentId}.`;
//     }
// }

// // Create an instance of the Student class
// const studentInstance = new Student("Gaurav", 19, "011111");

// // Log the overridden greeting message
// console.log(studentInstance.greeting());

// TASK 5

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }

//     static genericGreeting() {
//         return "Hello, this is a generic greeting from the Person class.";
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     getStudentId() {
//         return `My student ID is ${this.studentId}.`;
//     }
// }

// // Call the static method without creating an instance of the class
// console.log(Person.genericGreeting());


// // TASK 6
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }

//     static genericGreeting() {
//         return "Hello, this is a generic greeting from the Person class.";
//     }
// }

// class Student extends Person {
//     static studentCount = 0;

//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//         console.log(`Total number of students: ${Student.studentCount}`);
//     }

//     greeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     getStudentId() {
//         return `My student ID is ${this.studentId}.`;
//     }
// }

// // Create instances of the Student class
// const student1 = new Student("Gaurav", 19, "S12345");
// const student2 = new Student("shyaam", 22, "S12346");
// const student3 = new Student("bansal", 23, "S12347");

// // Log the total number of students
// console.log(`Total number of students created: ${Student.studentCount}`)



// TASK 7
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     greeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }

//     static genericGreeting() {
//         return "Hello, this is a generic greeting from the Person class.";
//     }
// }

// class Student extends Person {
//     static studentCount = 0;

//     constructor(firstName, lastName, age, studentId) {
//         super(firstName, lastName, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//         console.log(`Total number of students: ${Student.studentCount}`);
//     }

//     greeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     getStudentId() {
//         return `My student ID is ${this.studentId}.`;
//     }
// }

// // Create an instance of the Person class
// const personInstance = new Person("John", "Doe", 30);

// // Log the full name using the getter
// console.log(`Full name: ${personInstance.fullName}`);


// TASK 8
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(name) {
//         const [firstName, lastName] = name.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`My age is now updated to ${this.age} years old.`);
//     }

//     static genericGreeting() {
//         return "Hello, this is a generic greeting from the Person class.";
//     }
// }

// class Student extends Person {
//     static studentCount = 0;

//     constructor(firstName, lastName, age, studentId) {
//         super(firstName, lastName, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//         console.log(`Total number of students: ${Student.studentCount}`);
//     }

//     greeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     getStudentId() {
//         return `My student ID is ${this.studentId}.`;
//     }
// }

// // Create an instance of the Person class
// const personInstance = new Person("John", "Doe", 30);

// // Log the full name using the getter
// console.log(`Full name: ${personInstance.fullName}`);

// // Update the name using the setter
// personInstance.fullName = "Jane Smith";

// // Log the updated full name using the getter
// console.log(`Updated full name: ${personInstance.fullName}`);


// // TASK 9
// class Account {
//     #balance;

//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
//         } else if (amount > this.#balance) {
//             console.log("Insufficient balance.");
//         } else {
//             console.log("Withdrawal amount must be positive.");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const myAccount = new Account(1000);

// // Deposit money
// myAccount.deposit(500);

// // Withdraw money
// myAccount.withdraw(200);

// // Attempt to withdraw more money than the current balance
// myAccount.withdraw(2000);

// // Get and log the current balance
// console.log(`Current balance: ${myAccount.getBalance()}`);



// // TASK 10
// class Account {
//     #balance;

//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
//         } else if (amount > this.#balance) {
//             console.log("Insufficient balance.");
//         } else {
//             console.log("Withdrawal amount must be positive.");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// // Create an instance of the Account class
// const myAccount = new Account(1000);

// // Deposit money
// myAccount.deposit(500);
// console.log(`Balance after deposit: ${myAccount.getBalance()}`);

// // Withdraw money
// myAccount.withdraw(200);
// console.log(`Balance after withdrawal: ${myAccount.getBalance()}`);

// // Attempt to withdraw more money than the current balance
// myAccount.withdraw(2000);
// console.log(`Balance after attempted overdraft: ${myAccount.getBalance()}`);

// // Deposit more money
// myAccount.deposit(300);
// console.log(`Balance after second deposit: ${myAccount.getBalance()}`);

// Withdraw some money
// myAccount.withdraw(150);
// console.log(`Balance after second withdrawal: ${myAccount.getBalance()}`);
