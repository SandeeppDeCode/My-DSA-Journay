// {2, 4, 6, 8, 8, 8, 11, 13} target = 8 , 3  , 5
const firstAndLastOccurence = (nums,target) =>{
    let firstIndex = -1;
    let lastIndex = -1;
    for(let i = 0; i < nums.length;i++){
        if(target == nums[i]){
            firstIndex = i;
            break;
        }
    }
    
    for(let i = nums.length-1 ; i >= 0; i--){
        if(target ===  nums[i]){
            lastIndex = i;
            break;
        }
    }

    return {firstIndex:firstIndex,lastIndex:lastIndex}

}
console.log(firstAndLastOccurence([2, 4, 6, 8, 8, 8, 11, 13],13));

// Time Complexity = O(N)
// Space Complexity = O(1)

const firstAndLastOccurence2 = (nums,target) =>{

    let firstIndex = nums.findIndex(num => num === target)
    let lastIndex = nums.lastIndexOf(target);
    return [firstIndex,lastIndex];

    return firstIndex

}
console.log(firstAndLastOccurence2([2, 4, 6, 8, 8, 8, 11, 13],13));

// Time Complexity = O(N)
// Space Complexity = O(1)

//usign Binary Search using upper bound and lower bound;


const firstOcccurence = (nums,target) =>{
    let ans = -1;
    let low = 0;
    let high = nums.length-1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(nums[mid] === target){
            ans = mid;
            high = mid - 1;
        }else if(target > nums[mid]){
            low = mid + 1;
        }else if(target < nums[mid]){
            high = mid - 1;
        }
    }
    return ans;
}
console.log(firstOcccurence([1,2,3,4,4,5,6],4));


const lastOcccurence = (nums,target) =>{
    let ans = -1;
    let low = 0;
    let high = nums.length-1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(nums[mid] === target){
            ans = mid;
            low = mid + 1;
        }else if(target > nums[mid]){
            low = mid + 1;
        }else if(target < nums[mid]){
            high = mid - 1;
        }
    }
    return ans;
}
console.log(lastOcccurence([1,2,3,4,4,4,4,5,6],4));


//Upper bound and lower boudn concept answert

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

var searchRange = function(nums, target) {
    let n = nums.length;
    let lb = bound(nums, n, target, false);
    if (lb === n || nums[lb] !== target) return [-1, -1];
    let ub = bound(nums, n, target, true);
    return [lb, ub - 1];
};

console.log(searchRange([2, 4, 6, 8, 8, 8, 11, 13], 8)); // Output: [3, 5]






