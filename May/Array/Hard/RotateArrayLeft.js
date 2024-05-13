// Initial array
// arr = [1,2,3,4,5];
// Left rotate by 1 or rotate array counterclockwise or anticlockwise = [2,3,4,5,1];

/*
Left rotate or anticlockwise;
    [1,2,3,4,5]
      / / / / 
    [2,3,4,5,1]
*/

// Naive approach - create another array
function leftRotateNaive(arr){
    const result = [];
    for(let i = 1; i < arr.length; i++){
        result.push(arr[i]);
    }
    result.push(arr[0]);
    return result;
}
console.log(leftRotateNaive([1,2,3,4,5]));  // Time : O(N), Space : O(N)

// Optimal approach
function leftRotateOptimal(arr){
    let temp = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(leftRotateOptimal([1,4,5,7,6]));  // Time : O(N), Space : O(1)

// Left rotate by N times

// Naive approach
function leftRotateByK(arr, k){
    for(let i = 0; i < k; i++){
        let temp = arr[0];
        for(let i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}
console.log(leftRotateByK([2,1,5],4));

// Another approach
function leftRotateByK2(arr, k){
    k = k % arr.length;  // The line k = k % nums.length is used to handle the cases where k is greater than the length of the array.
    for(let i = 0; i < k; i++){
        let temp = arr[0];
        for(let i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}
console.log(leftRotateByK2([2,1,5],4));

// Optimal solution 
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




//Reason why we are doing num % k 

/*
The operation k % arr.length is used to handle the cases where k (the number of rotations) is greater than the length of the array.

Here’s why:

When you rotate an array of length n by n times, you’ll find that the array returns to its original configuration. This means that rotating an array n + 1 times is the same as rotating it just once.

So, if k is greater than n, we can skip the n full rotations and only rotate the array k % n times. This is because k % n gives the remainder of k divided by n, which is the number of rotations that actually change the array.

For example, if we have an array of length 5 and we want to rotate it 7 times, that’s the same as rotating it 2 times, because 7 % 5 = 2.

This operation helps optimize the code by avoiding unnecessary rotations. It’s a common technique used in cyclic rotation problems.
*/