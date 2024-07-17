/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const helper = function(nums, temp, ans, visited) {
        if (temp.length === nums.length) {
            ans.push([...temp]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                temp.push(nums[i]);
                visited[i] = true;
                helper(nums, temp, ans, visited);
                temp.pop();
                visited[i] = false;
            }
        }
    };

    const n = nums.length;
    const ans = [];
    const visited = new Array(n).fill(false);
    const temp = [];

    helper(nums, temp, ans, visited);

    return ans;
};


console.log(permute([1,2,3]))