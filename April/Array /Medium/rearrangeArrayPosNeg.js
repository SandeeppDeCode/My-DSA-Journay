
const arr = [-3,1,-2,5,2,-4]

// o/p = [3,-2,1,-5,2,-4]
//        0  1 2  3 4  5

function rearrange(arr) {
     // Define 2 arrays, one for storing positive 
     // and other for negative elements of the array.
    const neg = [];
    const pos = [];
    const ans = Array(arr.length).fill(0)

     // Segregate the array into positives and negatives.
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > 0) pos.push(arr[i])
        else neg.push(arr[i])
    }
      // Positives on even indices, negatives on odd.
    for(let  i = 0; i < arr.length / 2;i++){
        ans[2*i] = pos[i]
        ans[2*i+1] = neg[i]
    }

    return {neg:neg,pos:pos,ans:ans}
}
console.log(rearrange(arr));
/*
Time : O(N + N/2)
Space : O(N/2 + N/2 + N)
*/

function RearrangebySign(A) {

        let n = A.length;
    
        // Define an array for storing the answer separately.
        let ans = new Array(n).fill(0);
    
        // Positive elements start from 0 and negative from 1.
        let posIndex = 0, negIndex = 1;
        for (let i = 0; i < n; i++) {
    
        // Fill negative elements in odd indices and increment by 2.
        if (A[i] < 0) {
            ans[negIndex] = A[i];
            negIndex += 2;
        }
    
        // Fill positive elements in even indices and increment by 2.
        else {
            ans[posIndex] = A[i];
            posIndex += 2;
        }
        }
    
        return ans;
}
/*
Time : O(N);
Space : O(N);
*/

