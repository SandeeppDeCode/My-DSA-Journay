/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {

    for(let i = num.length-1 ; i >= 0 ; i--){
        if(num[i]  == 0){
            continue
        }else{
            return num.slice(0,i+1)
        }
    }

};