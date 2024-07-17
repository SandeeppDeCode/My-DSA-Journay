/*
1. Use hash hash Set;
*/

var removeDuplicates = function(nums) {
    const uniqueArr = [...new Set(nums)]
    const k = uniqueArr.length;
    for(let i = 0; i < k; i++){
        nums[i] = uniqueArr[i];
    }
    return k;
}