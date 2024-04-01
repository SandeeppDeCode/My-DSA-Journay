
let arr = [10,10,10,7,2];
function naive(arr){
for(let i = 0; i < arr.length; i++){
    let flag = false;
    for(let j = i+1; j < arr.length;j++){
        if(arr[j] > arr[i]){
            flag  = true;
            break;

        }
    }
    if(flag === false)
        console.log(arr[i]);
}
}
naive(arr)


function efficent(arr){
    let res  = [];
    let currhead = arr[arr.length - 1];
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] >= currhead){
            currhead = arr[i];
            res.push(currhead)
        }
    }
    return res;
}

console.log(efficent(arr))

