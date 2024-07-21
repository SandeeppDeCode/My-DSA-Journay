//parameterised way
function reverse(arr,left,right) {
    if(left >= right)
        return arr;
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    reverse(arr,left+1,right-1);
}
let arr = [1,2,3,4,5];
reverse(arr,0,arr.length-1);
console.log(arr);

console.log(reverse(arr,0,arr.length-1));

//functional way;

function reverseArrayFunctional(arr) {
    // Base case: If the array is empty or has one element, return it as is
    if (arr.length <= 1) {
        return arr;
    }
    // Recursive case: Reverse the rest of the array and add the first element to the end
    return reverseArrayFunctional(arr.slice(1)).concat(arr[0]);
}


//a cheat way to return from a fucntion 
function reverseArrayFunctional2(arr) {
    // Helper function to reverse the array using recursion
    function helper(arr, left, right) {

        if (left >= right) {
            return arr;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];
        return helper(arr, left + 1, right - 1);
    }
    // Start recursion from the full array
    return helper([...arr], 0, arr.length - 1);
}
console.log(reverseArrayFunctional2([1,2,3,4,5]));