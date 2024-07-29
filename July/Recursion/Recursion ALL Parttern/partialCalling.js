function subsequenceWithSumK(arr,k){

    function helper(index=0,ans=[],sum=0){
        if(index === arr.length){
            //condition satisfied
            if(k === sum){
                console.log(ans);
                return true
            }
            //condition not satsfied
            else return false;
        }

        ans.push(arr[index]);
        sum  += arr[index];
        if(helper(index+1,ans,sum)===true){
            return true
        }//pick
        ans.pop();
        sum -= arr[index];
        if(helper(index+1,ans,sum)===true){
            return true
        }//not pick
        return false
    }
    helper();
}

subsequenceWithSumK([1,2,1],5);