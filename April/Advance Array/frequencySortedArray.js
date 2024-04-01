


function sortedFreq(arr){
    let i = 0;
    const ans = [];
    while(i < arr.length){
        let j = i+1; 
        let freq = 1;
        while(j < arr.length){
            if(arr[j] === arr[i]){
                freq++;
                j++;
            }else{
                break
            }
        }
        ans.push([arr[i],freq])
        i = j;
    }
    return ans;
}
console.log(sortedFreq(arr));
