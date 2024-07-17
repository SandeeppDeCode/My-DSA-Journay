
// arr = [1,2,3,4,5];
//Right roate by 1 or roate array clockwise  = [2,3,4,5,1];
/*
Right rotate or anticlockwise;
    [1,2,3,4,5]
      \ \ \ \ 
    [5,1,2,3,4]

*/


//Naive approach - create anthor arr;

function rightRotateNaive(arr){
    const result = [];
    result.push(arr[arr.length - 1])
    for(let i = 0; i < arr.length - 1;i++){
        result.push(arr[i]);
    }

    return result;
}
console.log(rightRotateNaive([1,2,3,4,5]));
/*
Time : O(N)
Space : O(N)
*/

function rightRotateOptimal(arr){
    let temp = arr[arr.length - 1];
    for(let i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}
console.log(rightRotateOptimal([1,2,3,4,5])); // Outputs: [5,1,2,3,4]

/*
Time : O(N)
Space : O(1)
*/

function rightRotateDestructuring(arr){
    let last = arr[arr.length - 1];
    let rest = arr.slice(0, arr.length - 1);
    return [last, ...rest];
}
console.log(rightRotateDestructuring([1,2,3,4,5])); // Outputs: [5,1,2,3,4]



//Rotate array k times

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}


