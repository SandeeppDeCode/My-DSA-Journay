function subsequenceWithSumK(arr,k){

    function helper(index=0,ans=[],sum=0){
        if(index === arr.length){
            return 1
    
        }

        ans.push(arr[index]);
        sum  += arr[index];
        let l = helper(index+1,ans,sum)
        ans.pop();
        sum -= arr[index];
        let r = helper(index+1,ans,sum)
        return l + r;
    }
    let call = helper();
    console.log(call);
}

subsequenceWithSumK([1,2,1],5);