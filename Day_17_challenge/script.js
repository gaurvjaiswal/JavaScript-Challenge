// TASK 1
// class Node {
//     constructor(value) {
//         this.value = value;  
//         this.next = null;    
//     }
// }

// const firstNode = new Node(10);
// const secondNode = new Node(20);
// firstNode.next = secondNode; 

// console.log(firstNode.value); 
// console.log(firstNode.next.value);



// // TASK  2
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addNode(value) {
//         const newNode = new Node(value);
//         if (this.tail) {
//             this.tail.next = newNode;
//         } else {
//             this.head = newNode;
//         }
//         this.tail = newNode;
//     }

//     removeNode() {
//         if (!this.head) {
//             return null;  
//         }

//         if (!this.head.next) {
//             const removedValue = this.head.value;
//             this.head = null;
//             this.tail = null;
//             return removedValue;
//         }

//         let currentNode = this.head;
//         while (currentNode.next && currentNode.next.next) {
//             currentNode = currentNode.next;
//         }

//         const removedValue = this.tail.value;
//         currentNode.next = null;
//         this.tail = currentNode;
//         return removedValue;
//     }

//     displayNodes() {
//         let currentNode = this.head;
//         while (currentNode) {
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }
// }

// const linkedList = new LinkedList();
// linkedList.addNode(10);
// linkedList.addNode(20);
// linkedList.addNode(30);

// console.log("Displaying all nodes:");
// linkedList.displayNodes(); 

// console.log("Removing a node from the end:");
// linkedList.removeNode(); 

// console.log("Displaying all nodes:");
// // linkedList.displayNodes();  

// // TASK 3
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return null; 
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek()); 
// console.log(stack.pop());  
// console.log(stack.peek())
// console.log(stack.pop());  
// console.log(stack.pop());  
// console.log(stack.pop()); 


// TASK 4
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return null; 
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return null; 
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// function reverseString(inputString) {
//     const stack = new Stack();
    
//     for (let char of inputString) {
//         stack.push(char);
//     }
    
//     let reversedString = '';
//     while (!stack.isEmpty()) {
//         reversedString += stack.pop();
//     }
    
//     return reversedString;
// }

// const originalString = "hello";
// const reversedString = reverseString(originalString);

// console.log("Original String:", originalString); 
// console.log("Reversed String:", reversedString); 

// TASK 5
// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return null; 
//         }
//         return this.items.shift();
//     }

//     front() {
//         if (this.isEmpty()) {
//             return null; 
//         }
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.front()); 
// console.log(queue.dequeue());
// console.log(queue.front());
// console.log(queue.dequeue());  
// console.log(queue.dequeue()); 
// console.log(queue.dequeue());  


// TASK 6
// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return null;  
//         }
//         return this.items.shift();
//     }

//     front() {
//         if (this.isEmpty()) {
//             return null; 
//         }
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     displayQueue() {
//         console.log(this.items);
//     }
// }

// class PrinterQueue {
//     constructor() {
//         this.queue = new Queue();
//     }

//     addPrintJob(job) {
//         this.queue.enqueue(job);
//         console.log(`Added print job: ${job}`);
//     }

//     processPrintJob() {
//         if (this.queue.isEmpty()) {
//             console.log("No print jobs in the queue.");
//             return;
//         }
//         const job = this.queue.dequeue();
//         console.log(`Processing print job: ${job}`);
//     }

//     viewNextJob() {
//         const job = this.queue.front();
//         if (job === null) {
//             console.log("No print jobs in the queue.");
//         } else {
//             console.log(`Next print job: ${job}`);
//         }
//     }

//     displayJobs() {
//         this.queue.displayQueue();
//     }
// }

// const printerQueue = new PrinterQueue();
// printerQueue.addPrintJob("Document1.pdf");
// printerQueue.addPrintJob("Document2.pdf");
// printerQueue.addPrintJob("Document3.pdf");

// console.log("\nCurrent Print Jobs:");
// printerQueue.displayJobs();

// console.log("\nView Next Job:");
// printerQueue.viewNextJob();

// console.log("\nProcessing Print Jobs:");
// printerQueue.processPrintJob();
// printerQueue.processPrintJob();
// printerQueue.processPrintJob();

// console.log("\nCurrent Print Jobs:");
// printerQueue.displayJobs();

// console.log("\nProcessing Print Jobs:");
// printerQueue.processPrintJob();


// task 7
// class TreeNode {
//     constructor(value) {
//         this.value = value;  
//         this.left = null;   
//         this.right = null;  
//     }
// }

// const root = new TreeNode(10);
// const leftChild = new TreeNode(5);
// const rightChild = new TreeNode(15);

// root.left = leftChild; 
// root.right = rightChild; 
// console.log(root);

// // TASK 8
// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         const newNode = new TreeNode(value);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(node, newNode) {
//         if (newNode.value < node.value) {
//             if (node.left === null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

//     inOrderTraversal(node = this.root) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left);
//             console.log(node.value);
//             this.inOrderTraversal(node.right);
//         }
//     }
// }

// const binaryTree = new BinaryTree();
// binaryTree.insert(10);
// binaryTree.insert(5);
// binaryTree.insert(15);
// binaryTree.insert(3);
// binaryTree.insert(7);
// binaryTree.insert(12);
// binaryTree.insert(18);

// console.log("In-Order Traversal:");
// binaryTree.inOrderTraversal(); 


// TASK 9
