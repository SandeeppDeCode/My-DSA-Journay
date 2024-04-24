// arr = [1,2,3,4,5];
//Left roate by 1 or roate array counterclock wise or anti clock wise = [2,3,4,5,1];
/*
left rotate or anticlockwise;
    [1,2,3,4,5]
      / / / / 
    [2,3,4,5,1]

*/

//Naive approach - create anthor arr;

function leftRotateNaive(arr){
    const result = [];
    for(let i = 1; i < arr.length;i++){
        result.push(arr[i]);
    }
    result.push(arr[0]);
    return result;
}
console.log(leftRotateNaive([1,2,3,4,5]));
/*
Time : O(N)
Space : O(N)
*/

function leftRotateOptimal(arr){
    let temp = arr[0];
    for(let i = 0; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    console.log(arr);
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(leftRotateOptimal([1,4,5,7,6]));

/*
Time : O(N)
Space : O(1)
*/