
const arr = [1,0,0,0,3];
let sum = 0;
const hash = {};
for(let i = 0 ; i < arr.length;i++){
    sum += arr[i];
    if(!(hash[sum])) {
    hash[sum] = i;
    }
}
console.log(hash);