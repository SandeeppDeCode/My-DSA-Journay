var mostFrequentEven = function(nums) {
    let hash = {}
    for(let element of nums ){
        if(element % 2 === 0){

            if(hash[element]){
                hash[element]++;
            }else{
                hash[element] = 1;
            }
        }
        
    }
    let max = Math.max(...Object.values(hash))
    console.log(max);
    for(let key in hash){
        if(max === hash[key])
            return key;
    }

};
console.log(mostFrequentEven([0,1,2,2,4,4,1]));