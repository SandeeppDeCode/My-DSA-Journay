

function sumSubset(arr){

    const ans = [];

    function subset(index,sum,arr){
    
        if(index >= arr.length){
            ans.push(sum);
            return;
        }
        //take
        sum += arr[index];
        subset(index+1,sum,arr);
        //notake
        sum -= arr[index];
        subset(index+1,sum,arr);
    
    }
    subset(0,0,arr);
    return ans;
    
}

console.log(sumSubset([3,1,2]))