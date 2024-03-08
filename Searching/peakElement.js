/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // Initialize two pointers: left at the start of the array and right at the end of the array
    let left = 0, right = nums.length - 1;

    // Enter a loop that continues as long as left is less than right
    while (left < right) {
        // Find the middle index of the current range by averaging left and right and rounding down
        let mid = Math.floor((left + right) / 2);

        // Compare the middle element with its right neighbor
        if (nums[mid] > nums[mid + 1])
            // If the middle element is greater, then a peak must exist on the left half (including the middle element)
            // So, we update right to mid
            right = mid;
        else
            // If the middle element is less than or equal to its right neighbor, then a peak must exist on the right half
            // So, we update left to mid + 1
            left = mid + 1;
    }

    // When left and right converge to the same index, they will point to the peak element
    // So, we return left
    return left;
};
