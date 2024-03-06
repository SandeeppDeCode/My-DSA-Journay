// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.

// The upper bound is the smallest index, ind, where arr[ind] > x.

/*
arr [] = [2,3,6,7,8,8,11,11,11,12]
          0 1 2 3 4 5  6  7  8  9 
*/
const upperBound = (nums,target) => {
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] > target){
            return i;
        }
    }
    return nums.length
}
console.log(upperBound([2,3,6,7,8,8,11,11,11,12],11));

const upperBoundB = (nums, target) => {
    let ans = nums.length;
    let low = 0 ;
    let high = ans - 1; 

    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] > target) {
            ans = mid;
            high = mid - 1;
        }else if(nums[mid] < target){
            low = mid + 1;
        }
    }
    return ans;
}
console.log(upperBound([2,3,6,7,8,8,11,11,11,12],11));
