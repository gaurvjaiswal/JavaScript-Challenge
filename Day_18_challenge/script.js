// TASK 1
// function bubbleSort(arr) {
//     let n = arr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//         n--;  
//     } while (swapped);
// }

// let array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array: ", array);
// bubbleSort(array);
// console.log("Sorted array: ", array);

// TASK 2
// function selectionSort(arr) {
//     let n = arr.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
        
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
        
//         if (minIndex != i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
// }

// let array = [64, 25, 12, 22, 11];
// console.log("Original array: ", array);
// selectionSort(array);
// console.log("Sorted array: ", array);


// TASK 3
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
    
//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = [];
//     let right = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== Math.floor(arr.length / 2)) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//     }
    
//     return quickSort(left).concat(pivot, quickSort(right));
// }

// let array = [64, 25, 12, 22, 11];
// console.log("Original array: ", array);
// let sortedArray = quickSort(array);
// console.log("Sorted array: ", sortedArray);

// TASK 4
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1; // Return -1 if the target is not found
// }

// let array = [64, 25, 12, 22, 11];
// let target = 22;

// console.log("Array: ", array);
// let index = linearSearch(array, target);
// console.log("Index of target value " + target + ": " + index);

// TASK 5
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;  
// }

// let array = [11, 12, 22, 25, 64];
// let target = 22;

// console.log("Sorted array: ", array);
// let index = binarySearch(array, target);
// console.log("Index of target value " + target + ": " + index);

// TASK 6
// function countCharacterOccurrences(str) {
//     let charCount = {};

//     for (let char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     return charCount;
// }

// let inputString = "hello world";
// let characterCounts = countCharacterOccurrences(inputString);

// console.log("Character counts: ", characterCounts);

// TASK 7

// function longestSubstringWithoutRepeatingCharacters(str) {
//     let maxLength = 0;
//     let start = 0;
//     let charIndexMap = {};

//     for (let end = 0; end < str.length; end++) {
//         let char = str[end];

//         if (char in charIndexMap && charIndexMap[char] >= start) {
//             start = charIndexMap[char] + 1;
//         }

//         charIndexMap[char] = end;
//         maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;
// }

// let inputString = "abcabcbb";
// let lengthOfLongestSubstring = longestSubstringWithoutRepeatingCharacters(inputString);

// console.log("Length of the longest substring without repeating characters: ", lengthOfLongestSubstring);


// // TASK 8
// function rotateArray(arr, k) {
//     let n = arr.length;
//     k = k % n;  
//     let rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
//     return rotatedArray;
// }

// let array = [1, 2, 3, 4, 5];
// let k = 2;

// console.log("Original array: ", array);
// let rotatedArray = rotateArray(array, k);
// console.log("Rotated array by " + k + " positions: ", rotatedArray);


// TASK 9
// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];

// console.log("Array 1: ", array1);
// console.log("Array 2: ", array2);
// let mergedArray = mergeSortedArrays(array1, array2);
// console.log("Merged array: ", mergedArray);


// // TASK 10
// function fibonacci(n) {
//     if (n <= 1) return n;

//     let fib = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }

//     return fib[n];
// }

// let n = 10;
// let fibonacciNumber = fibonacci(n);
// console.log("Fibonacci number for n = " + n + ": " + fibonacciNumber);


// TASK 11
