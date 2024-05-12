
const nums = [0,1,0,3,12,0,1,0]
var moveZeroesAtEnd = function(nums) {
    let zeroIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            [nums[i],nums[zeroIndex]] = [nums[zeroIndex],nums[i]]
            zeroIndex++;
        }
    }
    return nums;
};


var moveZeroesAtFront = function(nums) {
    let zeroIndex = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] !== 0){
            [nums[i],nums[zeroIndex]] = [nums[zeroIndex],nums[i]]
            zeroIndex--;
        }
    }
    return nums
};

console.log(moveZeroesAtEnd(nums));
console.log(moveZeroesAtFront(nums));

//Time - O(N)
//Space - O(1)
//Two pointer approach