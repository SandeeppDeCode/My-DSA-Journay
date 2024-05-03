//Naive Approcah;

var subarraySum = function(nums, k) {
    let n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++ ){
        let sum = 0;
        for(let j = i; j < n; j++ ){
            sum += nums[j];
            if(sum === k) count++;
        }
    }
    return count;
};

/*
Time : O(N^2);
Space : O(1);
*/

//Optimal Solution
/*
Algorithm / Intuition
In this approach, we are going to use the concept of the prefix sum to solve this problem. Here, the prefix sum of a subarray ending at index i simply means the sum of all the elements of that subarray.
*/


var subarraySum = function(nums, k) {
        let count = 0;
    let sum = 0;
    let prefixSum = {0: 1};

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (prefixSum[sum - k]) {
            count += prefixSum[sum - k];
        }
        prefixSum[sum] = (prefixSum[sum] || 0) + 1;
    }

    return count;
};

//using map 


var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let prefixSum = new Map();
    prefixSum.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k);
        }
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
};

/**
Time : O(n);
Space : O(1);
 */