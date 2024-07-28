// TASK1

// function factorial(n) {
//     if (n <= 1) {
//         return 1; 
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// const testCases = [0, 1, 5, 7, 10];

// testCases.forEach(testCase => {
//     console.log(`Factorial of ${testCase} is ${factorial(testCase)}`);
// });


// TASK 2
// function fibonacci(n) {
//     if (n <= 1) {
//         return n; 
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2); 
//     }
// }

// const testCases = [0, 1, 5, 7, 10];

// testCases.forEach(testCase => {
//     console.log(`Fibonacci number at position ${testCase} is ${fibonacci(testCase)}`);
// });


// TASk 3

// function arraySum(arr, index = 0) {
//     if (index >= arr.length) {
//         return 0; 
//     } else {
//         return arr[index] + arraySum(arr, index + 1); 
//     }
// }

// const testCases = [
//     [],
//     [1],
//     [1, 2, 3, 4, 5],
//     [10, 20, 30, 40, 50],
//     [-1, -2, -3, -4, -5]
// ];

// testCases.forEach(testCase => {
//     console.log(`Sum of elements in [${testCase}] is ${arraySum(testCase)}`);
// });

// // TASK 4
// function findMax(arr, index = 0, currentMax = -Infinity) {
//     if (index >= arr.length) {
//         return currentMax; 
//     } else {
//         currentMax = arr[index] > currentMax ? arr[index] : currentMax;
//         return findMax(arr, index + 1, currentMax); // Recursive case
//     }
// }

// const testCases = [
//     [1],
//     [1, 2, 3, 4, 5],
//     [10, 20, 30, 40, 50],
//     [-1, -2, -3, -4, -5],
//     [5, 3, 8, 2, 9, 1]
// ];

// testCases.forEach(testCase => {
//     console.log(`Maximum element in [${testCase}] is ${findMax(testCase)}`);
// });


// TASK 5
// function reverseString(str) {
//     if (str.length === 0) {
//         return ""; 
//         return str[str.length - 1] + reverseString(str.slice(0, -1));
//     }
// }

// const testCases = [
//     "hello",
//     "world",
//     "javascript",
//     "recursion",
//     "GAURAV"
// ];

// testCases.forEach(testCase => {
//     console.log(`Reversed string of "${testCase}" is "${reverseString(testCase)}"`);
// })

// TASK 6
// function isPalindrome(str) {
//     function helper(str, start, end) {
//         if (start >= end) {
//             return true;
//         }
//         if (str[start] !== str[end]) {
//             return false; 
//         }
//         return helper(str, start + 1, end - 1); 
//     }
//     return helper(str, 0, str.length - 1);
// }

// const testCases = [
//     "racecar",
//     "level",
//     "hello",
//     "world",
//     "madam"
// ];

// testCases.forEach(testCase => {
//     console.log(`Is "${testCase}" a palindrome? ${isPalindrome(testCase)}`);
// });

// // TASk 7
// function countOccurrences(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return 0;
//     }
//     return (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
// }

// const testCases = [
//     { array: [1, 2, 3, 4, 5], target: 3 },
//     { array: [1, 2, 2, 4, 2], target: 2 },
//     { array: [1, 2, 3, 4, 5], target: 6 },
//     { array: [5, 5, 5, 5, 5], target: 5 },
//     { array: [], target: 3 }
// ];

// testCases.forEach(testCase => {
//     const { array, target } = testCase;
//     console.log(`Occurrences of ${target} in [${array}] is ${countOccurrences(array, target)}`);
// });


// // TASk 8
// function binarySearch(arr, target, low = 0, high = arr.length - 1) {
//     if (low > high) {
//         return -1; 
//     }
//     const mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) {
//         return mid; 
//     } else if (arr[mid] > target) {
//         return binarySearch(arr, target, low, mid - 1); 
//     } else {
//         return binarySearch(arr, target, mid + 1, high); 
//     }
// }

// const testCases = [
//     { array: [1, 2, 3, 4, 5], target: 3 },
//     { array: [1, 2, 3, 4, 5], target: 1 },
//     { array: [1, 2, 3, 4, 5], target: 5 },
//     { array: [1, 2, 3, 4, 5], target: 6 },
//     { array: [], target: 3 }
// ];

// testCases.forEach(testCase => {
//     const { array, target } = testCase;
//     const index = binarySearch(array, target);
//     console.log(`Index of ${target} in [${array}] is ${index}`);
// });


// TASK 9
// Definition for a binary tree node
// function TreeNode(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }

// // Recursive function to perform in-order traversal of a binary tree
// function inOrderTraversal(node, visit = console.log) {
//     if (node !== null) {
//         inOrderTraversal(node.left, visit); // Traverse the left subtree
//         visit(node.val);                    // Visit the node
//         inOrderTraversal(node.right, visit);// Traverse the right subtree
//     }
// }

// // Test cases
// const testCase1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// const testCase2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
// const testCase3 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
// const testCase4 = null; // Empty tree
// const testCase5 = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, null, new TreeNode(5)));

// // Logging results for test cases
// console.log("In-order traversal of testCase1:");
// inOrderTraversal(testCase1);

// console.log("In-order traversal of testCase2:");
// inOrderTraversal(testCase2);

// console.log("In-order traversal of testCase3:");
// inOrderTraversal(testCase3);

// console.log("In-order traversal of testCase4:");
// inOrderTraversal(testCase4);

// console.log("In-order traversal of testCase5:");
// inOrderTraversal(testCase5);

// TASK 10
// Definition for a binary tree node
// function TreeNode(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }

// // Recursive function to calculate the depth of a binary tree
// function treeDepth(node) {
//     if (node === null) {
//         return 0; // Base case: the depth of an empty tree is 0
//     } else {
//         const leftDepth = treeDepth(node.left); // Calculate the depth of the left subtree
//         const rightDepth = treeDepth(node.right); // Calculate the depth of the right subtree
//         return Math.max(leftDepth, rightDepth) + 1; // The depth of the tree is the max depth of the subtrees + 1
//     }
// }

// // Test cases
// const testCase1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// const testCase2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
// const testCase3 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
// const testCase4 = null; // Empty tree
// const testCase5 = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, null, new TreeNode(5)));

// // Logging results for test cases
// console.log("Depth of testCase1:", treeDepth(testCase1));
// console.log("Depth of testCase2:", treeDepth(testCase2));
// console.log("Depth of testCase3:", treeDepth(testCase3));
// console.log("Depth of testCase4:", treeDepth(testCase4));
// console.log("Depth of testCase5:", treeDepth(testCase5));
