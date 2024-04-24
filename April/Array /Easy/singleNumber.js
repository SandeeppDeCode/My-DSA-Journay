
//find the missing number 
const nums = [4,1,2,1,2];

let xor = 0;
for(let i = 0; i < nums.length;i++){
    console.log('xor = ',xor,'nums = ', nums[i], "xor ^ num = ", (xor ^ nums[i]));
    xor = xor ^ nums[i]
}
console.log(1 ^ 1)
console.log(2 ^ 2);
console.log(0 ^ 4);
console.log(2 ^ 1);