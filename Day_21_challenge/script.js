// TASK 1
// function twoSum(nums, target) {
//     const numMap = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
        
//         numMap.set(nums[i], i);
//     }
    
//     return null;  
// }

// const nums = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(nums, target);
// console.log(result);  


// TASK 2
// function twoSum(nums, target) {
//     const numMap = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
        
//         numMap.set(nums[i], i);
//     }
    
//     return null; // Return null if no such pair is found
// }

// // Test cases
// const testCases = [
//     { nums: [2, 7, 11, 15], target: 9 }, // Expected output: [0, 1]
//     { nums: [3, 2, 4], target: 6 },      // Expected output: [1, 2]
//     { nums: [3, 3], target: 6 },         // Expected output: [0, 1]
//     { nums: [1, 2, 3, 4, 5], target: 9 },// Expected output: [3, 4]
//     { nums: [0, 4, 3, 0], target: 0 },   // Expected output: [0, 3]
//     { nums: [1, 1, 1, 1], target: 2 }    // Expected output: [0, 1]
// ];

// // Logging the results for each test case
// testCases.forEach(({ nums, target }, index) => {
//     const result = twoSum(nums, target);
//     console.log(`Test case ${index + 1}: nums = [${nums}], target = ${target} -> Result: ${result}`);
// // });


// // task 3
// function reverseInteger(num) {
//     const isNegative = num < 0;
//     const reversedString = Math.abs(num).toString().split('').reverse().join('');
//     const reversedNumber = parseInt(reversedString, 10);
    
//     return isNegative ? -reversedNumber : reversedNumber;
// }

// // Test cases
// const testCases = [123, -456, 1000, -789, 0];

// testCases.forEach(num => {
//     const result = reverseInteger(num);
//     console.log(`Original: ${num} -> Reversed: ${result}`);
// });


// task 4
// function reverseInteger(num) {
//     const isNegative = num < 0;
//     const reversedString = Math.abs(num).toString().split('').reverse().join('');
//     const reversedNumber = parseInt(reversedString, 10);
    
//     return isNegative ? -reversedNumber : reversedNumber;
// }

// const testCases = [123, -456, 1000, -789, 0, -1000, 10, -10];

// testCases.forEach(num => {
//     const result = reverseInteger(num);
//     console.log(`Original: ${num} -> Reversed: ${result}`);
// });


// // TASK 5
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// function mergeTwoLists(l1, l2) {
//     const dummy = new ListNode();
//     let current = dummy;

//     while (l1 !== null && l2 !== null) {
//         if (l1.val < l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }

//     // If one of the lists is not empty, append the remaining elements
//     current.next = l1 !== null ? l1 : l2;

//     return dummy.next;
// }

// // Helper function to convert an array to a linked list
// function arrayToList(arr) {
//     const dummy = new ListNode();
//     let current = dummy;
//     arr.forEach(val => {
//         current.next = new ListNode(val);
//         current = current.next;
//     });
//     return dummy.next;
// }

// // Helper function to convert a linked list to an array (for easy visualization)
// function listToArray(list) {
//     const result = [];
//     let current = list;
//     while (current !== null) {
//         result.push(current.val);
//         current = current.next;
//     }
//     return result;
// }

// // Test cases
// const list1 = arrayToList([1, 2, 4]);
// const list2 = arrayToList([1, 3, 4]);

// const mergedList = mergeTwoLists(list1, list2);
// console.log(listToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]
