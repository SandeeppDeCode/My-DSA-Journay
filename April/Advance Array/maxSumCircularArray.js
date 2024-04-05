function kadaneMax(nums){
    let sum = 0;
    let maxi = nums[0];
    for(let i = 0; i < nums.length;i++){
        sum += nums[i];
        maxi = Math.max(maxi,sum);
        if(sum < 0) sum = 0;
    }
    return maxi;
}
function kadaneMini(nums){
    let sum = 0;
    let min = nums[0];
    for(let i = 0; i < nums.length;i++){
        sum += nums[i];
        min = Math.min(min,sum);
        if(sum > 0) sum = 0;
    }
    return min;
}
var maxSubarraySumCircular = function(nums) {
    let sum = nums.reduce((a,b)=> a + b,0);
    let minSum = kadaneMini(nums);
    let maxSum = kadaneMax(nums);
    let citcularSum = sum - minSum;
    if(maxSum > 0 ) return Math.max(maxSum,citcularSum);
    return maxSum;
};