// subsequnce can be contingouus and non contingonous but should be in order;
/*
arr = [3,1,2];
all the subsequnece 
[ 3, 1, 2 ]
[ 3, 1 ]
[ 3, 2 ]
[ 3 ]
[ 1, 2 ]
[ 1 ]
[ 2 ]
[]


*/

// function subsequence(arr,ans=[],index=0) {
//     if(index >= arr.length){
//         console.log(ans);
//         return;
//     }

//     ans.push(arr[index]);
//     subsequence(arr,ans,index+1); // take 
//     ans.pop();
//     subsequence(arr,ans,index+1); // not take
// }
// subsequence([3,1,2])

/*
## Analysis

### Recursive Calls:
- For each element in the array, there are two recursive calls:
  - One including the current element in the subsequence.
  - One excluding the current element from the subsequence.

### Number of Subsequences:
- For an array of length \( n \), there are \( 2^n \) possible subsequences.
- This is because each element can either be included or excluded from a subsequence, leading to \( 2 \) choices per element, and \( 2^n \) total combinations.

### Recursion Depth:
- The recursion depth will be \( n \) (the length of the array).

### Time Complexity:
- The time complexity is \( O(2^n) \) because each element leads to two recursive calls, resulting in \( 2^n \) total function calls.

### Space Complexity:
- The space complexity is \( O(n) \) due to the depth of the recursion stack and the space used by the `ans` array.

*/
var subsets = function(nums) {
    const ans = [];

    function createSubSets(index, arr) {
        if (index === nums.length) {
            console.log(arr);
            ans.push([...arr]);
            return;
        }
        arr.push(nums[index]);
        createSubSets(index + 1, arr);
        arr.pop();
        createSubSets(index + 1, arr);
    }

    createSubSets(0, []);
    return ans;
};

console.log(subsets([3,1,2]));