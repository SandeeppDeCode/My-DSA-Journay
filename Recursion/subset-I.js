














































// var subsets = function(nums) {
//     const result = [];

//     // Backtracking function to generate subsets
//     function backtrack(start, currentSubset) {
//         // Add the current subset to the result
//         result.push([...currentSubset]);

//         // Explore further possibilities
//         for (let i = start; i < nums.length; i++) {
//             currentSubset.push(nums[i]);
//             backtrack(i + 1, currentSubset);
//             currentSubset.pop();
//         }
//     }

//     // Start the backtracking from index 0
//     backtrack(0, []);

//     return result;
// };

// // Example usage:
// const nums1 = [1, 2, 3];
// console.log(subsets(nums1)); 
// // Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// const nums2 = [0];
// console.log(subsets(nums2)); 
// // Output: [[], [0]]


// var subsets = function(nums) {
//     const result = [];

//     // Backtracking function to generate subsets
//     function helper(temp, idx) {
//         if (idx === nums.length) {
//             result.push([...temp]);
//             return;
//         }
//         temp.push(nums[idx]);
//         helper(temp, idx + 1);
//         temp.pop();
//         helper(temp, idx + 1);
//     }

//     helper([], 0);

//     return result;
// };

