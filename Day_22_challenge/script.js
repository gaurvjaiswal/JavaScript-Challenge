// TASk 1

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// function addTwoNumbers(l1, l2) {
//     let dummyHead = new ListNode(0);
//     let p = l1, q = l2, curr = dummyHead;
//     let carry = 0;
    
//     while (p !== null || q !== null) {
//         let x = (p !== null) ? p.val : 0;
//         let y = (q !== null) ? q.val : 0;
//         let sum = carry + x + y;
//         carry = Math.floor(sum / 10);
//         curr.next = new ListNode(sum % 10);
//         curr = curr.next;
//         if (p !== null) p = p.next;
//         if (q !== null) q = q.next;
//     }
    
//     if (carry > 0) {
//         curr.next = new ListNode(carry);
//     }
    
//     return dummyHead.next;
// }

// TASk 2
// function lengthOfLongestSubstring(s) {
//     let n = s.length;
//     let set = new Set();
//     let maxLength = 0, i = 0, j = 0;
    
//     while (i < n && j < n) {
//         if (!set.has(s[j])) {
//             set.add(s[j]);
//             j++;
//             maxLength = Math.max(maxLength, j - i);
//         } else {
//             set.delete(s[i]);
//             i++;
//         }
//     }
    
//     return maxLength;
// }

// let input = "abcabcbb";
// console.log(lengthOfLongestSubstring(input)); // Output: 3


// // TASK 3
// function maxArea(height) {
//     let maxWater = 0;
//     let left = 0;
//     let right = height.length - 1;

//     while (left < right) {
//         let width = right - left;
//         let currentHeight = Math.min(height[left], height[right]);
//         let currentArea = width * currentHeight;
//         maxWater = Math.max(maxWater, currentArea);

//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxWater;
// }

// let heights = [1,8,6,2,5,4,8,3,7];
// console.log(maxArea(heights)); 


// // TASK 4
// function threeSum(nums) {
//     nums.sort((a, b) => a - b);  
//     let result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;   
        
//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
            
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
                
//                 while (left < right && nums[left] === nums[left + 1]) left++;  
//                 while (left < right && nums[right] === nums[right - 1]) right--;  
                
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// let nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums)); 



// TASK 5
// function groupAnagrams(strs) {
//     const map = new Map();
    
//     for (let str of strs) {
//         const sortedStr = str.split('').sort().join('');
        
//         if (!map.has(sortedStr)) {
//             map.set(sortedStr, []);
//         }
        
//         map.get(sortedStr).push(str);
//     }
    
//     return Array.from(map.values());
// }

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(strs)); 
