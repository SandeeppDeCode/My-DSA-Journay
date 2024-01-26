//1. Sort the array in asending order and last and second last element is the ans. 
// Note: this only works if the array does not contain any duplicates;

const test = (nums) =>{
    nums.sort((a,b)=> a - b);
    return {largest:nums[nums.length-1], secondLargest: nums[nums.length-2]}
}
console.log(test([1,2,4,9,7,5]))
/*
Time: nlogn
*/

//2. First find the largest and then remove the largest and check for second largest 
const test2 = (nums) =>{
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    for(let i = 0; i < nums.length;i++){
        if(nums[i] > secondLargest && nums[i] !== largest){
            secondLargest = nums[i]
        }
    }
    return {largest: largest,secondLargest:secondLargest};
}

console.log(test2([1,2,4,7,7,5]));

// Time : O(N) + O(N)

//3. Apply the same logic used in method 2 but with single loop -> combine the two loop;

const secondLargest = (nums) =>{
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            secondLargest = largest; 
            largest = nums[i];
        }
        else if(nums[i] > secondLargest && nums[i] !== largest){
            secondLargest = nums[i];
        }
    }
    return {largest: largest,secondLargest:secondLargest};
}
console.log(secondLargest([1,2,4,7,7,5,97,992,939]));
//Time : O(N)
