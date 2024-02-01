const duplicates = (arr) =>{
    const set = new Set();
    for(let i = 0; i < arr.length; i++){
        set.add(arr[i]);
    }
    // Convert the Set to an array using the spread operator
    const myArray = [...set];

    // Use a for loop to iterate over the values in the array
    // for (let i = 0; i < myArray.length; i++) {
    //         arr[i] = myArray[i]
    //         if)
    // }
    // return ar
}

console.log(duplicates([1,1,2,2,2,3,3]));
/*
Time: O(N);
Space : O(N);
*/

//using two pointer approcah and because array is sorted
const removeDuplicateInPlace = (nums) => {
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[j] !== nums[i])
        {
            nums[i+1] = nums[j];
            i++;
        }
    }
    for(let k = i+1; k < nums.length;k++){
        nums[k] = '_';
    }
    console.log(nums)
    return (i+1);
}

console.log(removeDuplicateInPlace([1,1,2,2,3,3]))

