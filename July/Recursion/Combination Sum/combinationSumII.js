/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    
    // Sort the array to handle duplicates easily
    candidates.sort((a, b) => a - b);
    
    function helper(index = 0, ans = [], sum = target) {
        if (sum === 0) { // If the sum is exactly zero, we found a valid combination
            result.push([...ans]);
            return;
        }
        
        for (let i = index; i < candidates.length; i++) {
            // Skip duplicates
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            
            // If the current element is greater than the remaining sum, no need to proceed further
            if (candidates[i] > sum) break;
            
            ans.push(candidates[i]);
            helper(i + 1, ans, sum - candidates[i]);
            ans.pop();
        }
    }
    
    helper();
    return result;
};