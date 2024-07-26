function combinationSum(nums,k) {
    const result = [];
    function helper(index,current,sum) {
        if(sum === 0) {
            result.push([...current]);
            return;
        }
        if(sum < 0 || index >= nums.length){
            return;
        }
        current.push(nums[index]);
        helper(index,current,sum-nums[index]);
        current.pop();
        
        helper(index+1,current,sum);
    }
    helper(0,[],k);
    return result;
}
console.log(combinationSum([2,3,6,7],7));