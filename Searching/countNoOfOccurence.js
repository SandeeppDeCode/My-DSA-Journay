// Problem Statement: You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

// Example 1:
// Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output: 4

/*
1.Do Linear Search O(N) 
2. Use hash Map O()
*/

function countOccurenceHashMap(nums,target){
    let hashMap = {}
    for(let element of nums){
        if(hashMap[element]){
            hashMap[element]++;
        }else{
            hashMap[element] = 1;
        }
    }
    return hashMap[target];
}
console.log(countOccurenceHashMap([2, 2 , 3 , 3 , 3 , 3 , 4,4,4,4,4,4],2))

function bound(arr, n, x, isUpper) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isUpper ? arr[mid] > x : arr[mid] >= x) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1; 
        }
    }
    return ans;
}

var countOccurrences = function(nums, target) {
    let n = nums.length;
    let lb = bound(nums, n, target, false);
    if (lb === n || nums[lb] !== target) return 0;
    let ub = bound(nums, n, target, true);
    return ub - lb;
};

console.log(countOccurrences([2, 4, 6, 8, 8, 8, 11, 13], 8)); // Output: 3


