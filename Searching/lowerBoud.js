// The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

// The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

const lowerBound = (nums,target) => {
    
    for(let i= 0 ;i < nums.length;i++ ){
        if(target <= nums[i]){
            return i;
        }
    }
    return nums.length;
}
console.log(lowerBound([1,2,3,5,6],4));

const lowerBoundB = (nums,target) => {
    let ans = nums.length;
    let low = 0;
    let high = ans-1;

    while(low <= high){
        let mid = Math.floor((low + mid)/2);
        if(target <= nums[mid]){
            ans = mid;
            high = mid - 1;
        }else if (target > nums[mid]){
            low = mid + 1;
        }
    }
    return ans;
}
console.log(lowerBound([1,2,3,5,6],4));

/*
arr[mid] >= target mean target is less than the value at the mid. i.e the target is in the left portion of the arr so we trim down the search space of right hand and focus on left hand side

arr[mid] <= target mean target is greater than the value at the mide i.e target is present in the rigth protion of the array so we trim down the serch space of left hand side and focus on the right hand side;
*/