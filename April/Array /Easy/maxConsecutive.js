/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = Number.MIN_SAFE_INTEGER;
    let count = 0;
    for(let i = 0; i < nums.length;i++){
        if(nums[i] === 1){
            count++;
        }else{
            count=0;
        }
        ans = Math.max(ans,count)
    }
    return ans;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = Number.MIN_SAFE_INTEGER;
    let count = 0;
    for(let i = 0; i < nums.length;i++){
        count++;
        if(nums[i] === 0){
            count = 0;
        }
        ans = Math.max(ans,count);

    }
    return ans;
};