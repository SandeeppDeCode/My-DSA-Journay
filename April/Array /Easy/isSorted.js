//Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

function isSorted(arr){

    for(let i = 0; i < arr.length-1; i++){
        console.log(arr[i+1], arr[i]);
        if(!(arr[i+1] >= arr[i])){
            return false;
        }
    }
    return true
}
console.log(isSorted([1,2,2,3,4,5]));

function isSorted2(arr){
    for(let i = 1; i < arr.length;i++){
        if(!(arr[i] >= arr[i-1])){
            return falnse
        }
    }
    return true
}

console.log(isSorted2([1,2,2,3,4,5,6]));
  


/*
Time complexity : O(N);
Space Comeplity : O(1);
*/