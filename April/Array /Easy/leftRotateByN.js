

//naive
function leftRotateByK(arr,k){

    for(let i = 0; i < k; i++){
    let temp = arr[0];
    for(let i = 0; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }

    arr[arr.length - 1] = temp;
}
    return arr;
}
console.log(leftRotateByK([2,1,5],4));

function leftRotateByK2(arr,k){
    k = k % arr.length;
    //The line k = k % nums.length is used to handle the cases where k is greater than the length of the array.
    for(let i = 0; i < k; i++){
    let temp = arr[0];
    for(let i = 0; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }

    arr[arr.length - 1] = temp;
}
    return arr;
}
console.log(leftRotateByK2([2,1,5],4));


//otpimal solution 


function leftRotateByD(arr, d) {
    let n = arr.length;
    d = d % n;
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(leftRotateByD([2,1,5], 4));  // Output: [1, 5, 2]



