//1. Brute Fore

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarraySum1(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // subarray = arr[i.....j]
            let sum = 0;

            //add all the elements of subarray:
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

//2. 

function maxSubarraySum2(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // current subarray = arr[i.....j]

            //add the current element arr[j]
            // to the sum i.e. sum of arr[i...j-1]
            sum += arr[j];

            maxi = Math.max(maxi, sum); // getting the maximum
        }
    }

    return maxi;
}


//3.Kandane algo


function maxSubarraySum3(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}


//4.Printing the subarray


function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    let start = 0;
    let ansStart = -1, ansEnd = -1;
    for (let i = 0; i < n; i++) {

        if (sum == 0) start = i; // starting index

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;

            ansStart = start;
            ansEnd = i;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    //printing the subarray:
    console.log("The subarray is: [");
    for (let i = ansStart; i <= ansEnd; i++) {
        console.log(arr[i] + " ");
    }
    console.log("]n");

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let maxSum = maxSubarraySum(arr2, n);
console.log("The maximum subarray sum is: " + maxSum);











