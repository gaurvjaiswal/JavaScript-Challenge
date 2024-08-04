// // TASK 1
// function findMedianSortedArrays(nums1, nums2) {
//     const totalLength = nums1.length + nums2.length;
//     const halfLength = Math.floor(totalLength / 2);
    
//     if (nums1.length > nums2.length) {
//         [nums1, nums2] = [nums2, nums1];
//     }

//     let left = 0;
//     let right = nums1.length - 1;

//     while (true) {
//         const i = Math.floor((left + right) / 2); 
//         const j = halfLength - i - 2;  

//         const nums1Left = i >= 0 ? nums1[i] : -Infinity;
//         const nums1Right = i + 1 < nums1.length ? nums1[i + 1] : Infinity;
//         const nums2Left = j >= 0 ? nums2[j] : -Infinity;
//         const nums2Right = j + 1 < nums2.length ? nums2[j + 1] : Infinity;

//         if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
//             if (totalLength % 2 !== 0) {
//                 return Math.min(nums1Right, nums2Right);
//             }
//             return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
//         } else if (nums1Left > nums2Right) {
//             right = i - 1; 
//         } else {
//             left = i + 1;  
//         }
//     }
// }

// const nums1 = [1, 3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2));  

// // const nums1 = [1, 2];
// // const nums2 = [3, 4];
// // console.log(findMedianSortedArrays(nums1, nums2));  


// // TASK 2
// function trap(height) {
//     if (height.length === 0) {
//         return 0;
//     }

//     let left = 0;
//     let right = height.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let waterTrapped = 0;

//     while (left < right) {
//         if (height[left] < height[right]) {
//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 waterTrapped += leftMax - height[left];
//             }
//             left++;
//         } else {
//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 waterTrapped += rightMax - height[right];
//             }
//             right--;
//         }
//     }

//     return waterTrapped;
// }

// const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trap(elevationMap));  


// TASK 3
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function mergeKLists(lists) {
//     if (lists.length === 0) return null;

//     const minHeap = new MinHeap((a, b) => a.val - b.val);

//     // Initialize the heap with the head of each list
//     for (let list of lists) {
//         if (list !== null) {
//             minHeap.insert(list);
//         }
//     }

//     const dummy = new ListNode();
//     let current = dummy;

//     while (!minHeap.isEmpty()) {
//         const smallestNode = minHeap.extract();
//         current.next = smallestNode;
//         current = current.next;

//         if (smallestNode.next !== null) {
//             minHeap.insert(smallestNode.next);
//         }
//     }

//     return dummy.next;
// }

// class MinHeap {
//     constructor(compare) {
//         this.compare = compare;
//         this.heap = [];
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.bubbleUp(this.heap.length - 1);
//     }

//     extract() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const top = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.bubbleDown(0);
//         return top;
//     }

//     bubbleUp(index) {
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
//                 [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     bubbleDown(index) {
//         const lastIndex = this.heap.length - 1;
//         while (true) {
//             let leftIndex = 2 * index + 1;
//             let rightIndex = 2 * index + 2;
//             let smallestIndex = index;

//             if (leftIndex <= lastIndex && this.compare(this.heap[leftIndex], this.heap[smallestIndex]) < 0) {
//                 smallestIndex = leftIndex;
//             }

//             if (rightIndex <= lastIndex && this.compare(this.heap[rightIndex], this.heap[smallestIndex]) < 0) {
//                 smallestIndex = rightIndex;
//             }

//             if (smallestIndex !== index) {
//                 [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
//                 index = smallestIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     isEmpty() {
//         return this.heap.length === 0;
//     }
// }

// function createLinkedList(arr) {
//     let dummy = new ListNode();
//     let current = dummy;
//     for (let num of arr) {
//         current.next = new ListNode(num);
//         current = current.next;
//     }
//     return dummy.next;
// }

// const list1 = createLinkedList([1, 4, 5]);
// const list2 = createLinkedList([1, 3, 4]);
// const list3 = createLinkedList([2, 6]);

// const mergedList = mergeKLists([list1, list2, list3]);

// function printLink


// TASK 4
