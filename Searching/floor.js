// The floor of x is the largest element in the array which is smaller than or equal to x( i.e. largest element in the array <= x).
// largest no in array  <= x;

/*
Example 1:
Input: nums = [10,20,30,40,50], target = 25
Output: 20

Example 2:
Input: nums = [10,20,25,40], target = 25
Output: 25


*/
const floor = (nums, target) => {
    let max = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= target && nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}
console.log(floor([10,20,30,40,50],25));  // This will now correctly return 20

function findFloor(arr,x) {
    let low = 0, high = arr.length- 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] <= x) {
            ans = arr[mid];
            //look for smaller index on the left
            low = mid + 1;
        }
        else {
            high = mid - 1; // look on the right
        }
    }
    return ans;
}
console.log(findFloor([10,20,30,40,50],25)); 