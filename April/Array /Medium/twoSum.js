/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

const arr = [2,7,11,15]
let k = 9;
function twoSum(arr,k){
    for(let i = 0; i < arr.length;i++){
        for(let j = i+1; j < arr.length;j++){
            console.log('i = ', i ,'j = ', j);
            console.log(arr[i],arr[j]);
        }
    }
}
console.log(twoSum(arr,k));

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length;i++){
        for(let j = i + 1; j < nums.length;j++){
            if((nums[i]+nums[j]) === target){
                return [i,j];
            }
        }
    }
};
console.log(twoSum(arr,k));


var twoSum2 = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length;i++){
        let difference = target - nums[i];
        if(map.has(difference)){
            return [map.get(difference),i];
        }
        map.set(nums[i],i);
    }
    
};


//using 2pointer greedy approch but tells only a pair exixts or not 

function twoSumExits(arr,target){
    let left = 0;
    let right = arr.length - 1;
    console.log(arr);
    arr = arr.sort((a,b) => a - b)
    console.log(arr);
    for(let i = 0; i < arr.length;i++){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return 'Yes'
        }
        if(target > sum){
            left++;
        }else{
            right--;
        }
    }
    return 'No';
}
console.log(twoSumExits(arr,k));