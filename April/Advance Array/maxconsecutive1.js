const arr = [1,0,1,1,1,1,0,1,1,1,1,1,1]
let maxCon1 = Number.MIN_VALUE;
let count = 0;
for(let i = 0; i < arr.length;i++){
    if(arr[i] === 1){
        count++
    }else{
        count = 0;
    }
    maxCon1 = Math.max(maxCon1,count);

}
console.log(maxCon1);


function maxConsectuive1(arr){
    let res = 0;
    let count = 0;
    for(let i= 0; i < arr.length;i++){
        if(arr[i] === 0){
            count = 0;
        }else{
            count++;
            res = Math.max(res,count);
        }
    }
    return res;
}
console.log(maxConsectuive1(arr));