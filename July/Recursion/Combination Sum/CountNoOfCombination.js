// including dulicates
function combinationSum(nums,k) {
    const result = [];
    function helper(index,current,sum) {
        if(sum === 0) {
            return 1;
        }
        if(sum < 0 || index >= nums.length){
            return 0;
        }
        current.push(nums[index]);
        let r = helper(index,current,sum-nums[index]);
        current.pop();
        
        let l = helper(index+1,current,sum);
        return l + r;
    }
    console.log(helper(0,[],k));
    return result;
}
console.log(combinationSum([2,3,6,7],7));

//does not include duplicate;

var combinationSum2 = function(candidates, target) {
    const result = [];
    
    // Sort the array to handle duplicates easily
    candidates.sort((a, b) => a - b);
    
    function helper(index = 0, ans = [], sum = target) {
        if (sum === 0) { // If the sum is exactly zero, we found a valid combination
            result.push([...ans]);
            return 1;
        }

        if (sum < 0 || index >= candidates.length) {
            return 0; // No valid combination
        }
        let count = 0
        
        for (let i = index; i < candidates.length; i++) {
            // Skip duplicates
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            
            // If the current element is greater than the remaining sum, no need to proceed further
            if (candidates[i] > sum) break;
            
            ans.push(candidates[i]);
            count  += helper(i + 1, ans, sum - candidates[i]);
            ans.pop();
        }
        return count;
    }
    
    console.log(helper());
    return result;
};
console.log(combinationSum2([10,1,2,7,6,1,5],8));