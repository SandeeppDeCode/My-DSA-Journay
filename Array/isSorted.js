const isSorted = (arr) => {
    return arr === arr.sort((a,b) => a - b);
}
console.log(isSorted([1,2,3,4,5]));

/*
Time: O(N*LogN)
Space: O(N)
*/

// [1,2,3,4,5,6,7,8]

const isSorted1 = (arr) => {
    for(let i = 0; i < arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}
console.log(isSorted1([5,6,3,0]));

/*
Time: O(N)
Space: O(1)
*/
