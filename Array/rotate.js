/*                                         || Left Rotate or Counter clock wise                                                 */
/*
left rotate by one => counterclockwise
arr = [1,2,3,4,5]
LeftRoatated = [2,3,4,5,1]

arr = [30,5,20]
LeftRoatated = [5,20,30]


*/

//1. Using shift and unshift method of array 
const leftRotateArrayByOne =(nums)=>{
    let firstElement = nums.shift();
    nums.push(firstElement)
    return nums
}

console.log(leftRotateArrayByOne([1,2,3,4,5]))

// Time : O(N) because of that shift method;
// Space : O(1)

//Same code without using shift method;

const test = (nums) =>{
    let firstElement = nums[0];

    for(let i = 1; i < nums.length;i++){
        nums[i-1] = nums[i];
    }
    nums[nums.length - 1] = firstElement;
    return nums;
}
console.log(test([1,2,3,4,5,6,7]));


//   || Left rotate by k times

const leftRoateByK = (nums,k) =>{
    k = k % nums.length;
    if(k > nums.length) return
    for(let  i = 0; i < k; i++){
        let firstElement = nums[0];

        for(let i = 1; i < nums.length;i++){
            nums[i-1] = nums[i];
        }
    nums[nums.length - 1] = firstElement;
}
    return nums;
}
console.log(leftRoateByK([1,2,3,4,5,6,7],2));


// using Reversal ALgorithm
/*
1.Reverse first k elements
2.Reverse the las n-k elements of the array.
3. Reverse the whole array.
*/

function reverse(arr,start=0,end=arr.length-1){
    while (start <= end) {
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++;
        end--;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]))

const reversalRotateLeft = (nums,k) =>{
    let n = nums.length;
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    // Reverse last n-k elements
    reverse(nums, k, n - 1);
    // Reverse whole array
    reverse(nums, 0, n - 1);
    return nums;
}
console.log(reversalRotateLeft([1,2,3,4,5,6,7],2));





//                                           || Rigth Rotate or clock wise


/*
arr = [1,2,3,4,5]
RightRotate = [5,1,2,3,4]

arr = [1,2,4,5,6,7]
rigthRotate = [7,1,2,3,4,5,6]
*/

const rigthRotate = (nums) => {
    let lastElement = nums.pop();
    nums.unshift(lastElement);
    return nums;
}
console.log(rigthRotate([1,2,3,4,6,7]));

const test4 = (nums) => {
    let lastElement = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
        nums[i] = nums[i - 1];
    }
    nums[0] = lastElement;
    return nums;
}
console.log(test4([1,2,3,4,5,6,7]));

// Right rotate k times 

const rigthRoateByK = (nums,k) =>{
    k = k % nums.length;
    if(k > nums.length) return
    for(let  i = 0; i < k; i++){
        let lastElement = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = lastElement;
    }
    return nums;
}
console.log(rigthRoateByK([1,2,3,4,5,6,7],2));


//reversal method

// using Reversal ALgorithm
/*
1.Reverse first n-k elements
2. Reverse last k elements
3. Reverse the whole array.
*/

function reverse(arr,start=0,end=arr.length-1){
    while (start <= end) {
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++;
        end--;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]))

const reversalRotateRigth = (nums,k) =>{
    let n = nums.length;
    // Reverse first n-k elements
    reverse(nums, 0, n - k - 1);
    // Reverse last k elements
    reverse(nums, n - k, n - 1);
    // Reverse whole array
    reverse(nums, 0, n - 1);
    return nums;
}
console.log(reversalRotateRigth([1,2,3,4,5,6,7],2));

