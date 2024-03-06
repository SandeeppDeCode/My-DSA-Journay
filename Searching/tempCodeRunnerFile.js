
// const ceilOP = (nums,target) => {
//     let ans = -1
//     let low = 0; 
//     let high = nums.length-1;
//     while(low <= high){
//         let mid = Math.floor((low + high)/2)
//         if(nums[mid] >= target){
//             ans = nums[mid]
//             high = mid - 1;
//         }else if (nums[mid] <= target){
//             low = mid + 1;
//         }
//     }
//     return ans;
// }
// console.log(ceilOP([10,20,30,40,50],25));