// [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
// [1,2,3,4,1,0,0,0]

//1.Basic - code take usign more space and time 
const test1 = (nums)=>{
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0)
            ans.push(nums[i])
    }
    for (let i = ans.length; i < nums.length; i++) {
        ans[i] = 0
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i]
    }
    return nums
}


//2. Improveed vesion swaping the nonzero element with the first zero lement
const test2 = (nums) => {
    let zeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the first zero encountered
            [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
            zeroIndex++;
        }
    }

    return nums;
};

//This code is good but taking o(n) going for each and every element

console.log(test([1, 0, 2, 3, 0, 4, 0, 1]));


//Striver Babu ka code;
var moveZeroes = function (nums) {
  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return nums;
  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
};
