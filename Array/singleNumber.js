//1.First find the frequency and the element that has single frequency is the ans

const frequency = (nums) =>  {
    const hasMap = {};
    for(let element of nums){
        if(hasMap[element]){
            hasMap[element]++;
        }else{
            hasMap[element] = 1;
        }
    }
    return hasMap;
}
console.log(frequency([2,2,1]));

const singleNumber = (nums) => {
    let freq = frequency(nums)
    console.log(freq);
    for(let key in freq){
        if(freq[key] === 1){
            return key;
        }
    }
}
console.log(singleNumber([4,1,2,1,2]));



//2. Sort the array and Traverse the array and check if one of the adjacent elements is equal to the current element or not.
// [4,1,2,1,2]
// [2,2,1,1] n = 3

const singleNumberSOrt = (nums) => {
    nums.sort((a,b) => b - a); //sorting in descending order
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            return nums[i];
        }
    }
    return -1;
}
console.log(singleNumberSOrt([1,2,1,2]));


//3 use Xor Bitwise 

