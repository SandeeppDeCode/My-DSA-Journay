// Basic Way 
const test  = (nums) =>{
    for(let i = 0; i <= nums.length; i++){
        if(!(nums.includes(i))){
            return i;
        }
    }
}
//Time : O(N) for outerloop and O(N) for includes method
console.log(test([0,1,2,4]))

// Basic Way But wihout using the includes method of array 
const findMissingPositive = (nums) => {
    for (let i = 1; i <= nums.length + 1; i++) {
        let found = false;
        
        // Check if the current positive integer i is present in the array
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === i) {
                found = true;
                break;
            }
        }

        // If the current positive integer i is not present, return it as the missing positive
        if (!found) {
            return i;
        }
    }

    // This should not be reached, as there is guaranteed to be a missing positive integer
    return -1;
};

// Example usage:
const nums = [3, 4, -1, 1];
const missingPositive = findMissingPositive(nums);
console.log(missingPositive);


// Expenduture method = Total Money -  expensse = missing ammount haha
const missing = (nums) => {
    let n = nums.length;
    const sum = nums.reduce((acc, num) => acc + num, 0);
    const sumOfN = (n*(n+1)) / 2;
    return sumOfN - sum;

};

// Example usage:
console.log(missing([0,1,]));



//Sort the array and find the the missing number by counting continoulsly
const test3 = (nums) => {
    nums.sort((a,b)=>a-b);
    for(let i = 0; i <= nums.length;i++){
        if(i !== nums[i]){
            return i;
        }
    }

}
console.log(test3([0,1,2]))
