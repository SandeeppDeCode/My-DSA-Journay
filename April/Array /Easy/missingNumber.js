//using the sum methods

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    const totalSum = (n*(n+1))/2;
    let sum = 0
    for(let i = 0; i < nums.length;i++){
        sum += nums[i];
    }
    return totalSum - sum;

};


//using the xor method; have some cs fundamental clear

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let xor1 = 0;
    let xor2 = 0; 
    for(let i = 0; i < n; i++){
        xor1 ^= nums[i]; 
    }
    for(let i = 1; i <= n;i++){
        xor2 ^= i;
    }

    return xor1 ^ xor2;

};

//Time = O(N);
//Space = O(1)