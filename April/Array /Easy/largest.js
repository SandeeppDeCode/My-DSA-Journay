
//Larget Number in Array

let arr = [1,2,2,5,3,2,9,10,2,31,0,1]
let max = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);

console.log(Math.max(...arr));