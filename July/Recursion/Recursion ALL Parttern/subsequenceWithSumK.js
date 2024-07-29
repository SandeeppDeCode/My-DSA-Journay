function subsequenceWithSumK(arr,k){

    function helper(index=0,ans=[],sum=0){
        if(index === arr.length){
            if(k === sum){
                console.log(ans);
            }
            return;
        }

        ans.push(arr[index]);
        sum  += arr[index];
        helper(index+1,ans,sum);//pick
        ans.pop();
        sum -= arr[index];
        helper(index+1,ans,sum);//not pick
    }
    helper();
}

subsequenceWithSumK([1,2,1],0);