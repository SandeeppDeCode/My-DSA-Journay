/*
Subset -> any possible combinationof a given array. Like a power set of an array
Print all subset of  an array
For N = 2^N;
*/

//1.Way take and not take method
function subset(nums){
    const ans = [];

    function backtrack(index,ds){

        if(index === nums.length){
            ans.push([...ds])
            return;
        }
        ds.push(nums[index])
        backtrack(index+1,ds)
        ds.pop();
        backtrack(index+1,ds)
    }
    backtrack(0,[])
    return ans;
}
console.log(subset([1,2,3]))


//2.Way using forloop
function subset(nums){
    const ans = [];

    function backtrack(start,ds){
        ans.push([...ds]);
        for(let i = start; i < nums.length;i++){
            ds.push(nums[i]);
            backtrack(i+1,ds);
            ds.pop();
        }
    }
    backtrack(0,[])
    return ans;
}

console.log(subset([1,2,3]))




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const ans = [];

    function backtrack(index, arr) {
        ans.push(arr.slice()); 
        nums.sort((a,b) => a - b)
        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i - 1]) continue;
            arr.push(nums[i]);
            backtrack(i + 1, arr);
            arr.pop();
        }
    }

    backtrack(0, []);
    return ans;
};


// ANother way
// var subsets = function(nums) {
//     const ans = new Set();

//     function createSubSets(index, arr) {
//         if (index === nums.length) {
//             ans.add(JSON.stringify([...arr]));
//             return;
//         }
//         arr.push(nums[index]);
//         createSubSets(index + 1, arr);
//         arr.pop();
//         createSubSets(index + 1, arr);
//     }

//     createSubSets(0, []);

//     // Convert back to arrays from strings
//     return Array.from(ans).map(subsetString => JSON.parse(subsetString));
// };

// console.log(subsets([1, 2, 2]));
