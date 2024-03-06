//it is nothing but smalledt number in array i.e  >= target
/*
Example 1:
Input: nums = [10,20,30,40,50], target = 25
Output: 30

Example 2:
Input: nums = [10,20,25,40], target = 25
Output: 25

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

*/
const ceil = (nums,target) => {
    for(let i = 0 ; i < nums.length;i++){
        if(nums[i] >= target){
            return nums[i];
        }
    }
    return -1
}
console.log(ceil([10,20,30,40,50],35));

const ceilOP = (nums,target) => {
    let ans = -1
    let low = 0; 
    let high = nums.length-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] >= target){
            ans = nums[mid]
            high = mid - 1;
        }else if (nums[mid] <= target){
            low = mid + 1;
        }
    }
    return ans;
}
console.log(ceilOP([10,20,30,40,50],45));