const arr = [1,2,3];

function generateSubarray(arr){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        const subArray = [];
        for(let j = i; j < arr.length;j++){
            subArray.push(arr[j]);
            result.push([...subArray])
        }
        
        
    }
    return result
}
console.log(generateSubarray(arr));

function maxSubarray1(arr){

    let max  = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length;j++){
            // subarray = arr[i.....j];
            let sum  = 0;
            for(let k = i; k <=j; k++){
                sum += arr[k];
            }
            max = Math.max(max, sum);
        }
        
        
    }
    return max
}
console.log(maxSubarray1(arr));
function maxSubarray2(arr){
    let max  = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length;j++){
            sum += arr[j];
            max = Math.max(max,sum)
        }
        
        
    }
    return max
}
console.log(maxSubarray2(arr));


function maxSubarraySum(arr) {
    let n = arr.length;
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

const maxSum = maxSubarraySum(arr);
console.log("The maximum subarray sum is: " + maxSum);




