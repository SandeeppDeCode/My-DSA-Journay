function reverse1(arr){
    
    let start = 0;
    let end = arr.length-1;
     
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]] 
        start++;
        end--;
    }
    
    return arr;


}

console.log(reverse1([1,2,3,4,5]))

// Recursion usign two pointer

function reverse2(arr,start,end){
    if(start >= end) return 
    [arr[start],arr[end]] = [arr[end],arr[start]];
    reverse2(arr,start+1,end-1) 
}
// DRIVER CODE
const arr1 = [1,2,3,4,5]
console.log(arr1);
reverse2(arr1,0,arr1.length-1)
console.log(arr1)


// Recursion usign single  pointer

function reverse3(arr,i){
    if(i >= (arr.length / 2)) return
    [arr[i],arr[arr.length - i - 1]] = [arr[arr.length - i - 1],arr[i]];
    reverse3(arr,i+1) 
}

// // DRIVER CODE
const arr2 = [1,2,3,4,5]
console.log(arr2);
reverse3(arr2,0)
console.log(arr2)



