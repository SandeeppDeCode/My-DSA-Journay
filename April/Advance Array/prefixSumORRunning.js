
const arr = [6,3,-2,4,-1,0,-5]
const prefixSum = [arr[0]];
for(let i = 1; i < arr.length; i++){
    prefixSum[i] = prefixSum[i-1] + arr[i]; 
}
console.log(prefixSum);


//modifying the original arr;

for(let i = 1; i < arr.length; i++){
    arr[i] = arr[i-1] + arr[i];
}
console.log(arr);