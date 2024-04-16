



//Solution

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for(let i = num.length-1; i >= 0; i--){
        if(Number(num.charAt(i) % 2) !== 0){
            return num.substring(0,i+1);
        }
    }
    return "";
};


/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let maxOdd = Number.MIN_VALUE;
    let found = false;
    for(let i = 0; i < num.length;i++){
        let substr = "";
        for(let j = i; j < num.length;j++){
            substr += num.charAt(j) ;
            if((Number(substr) % 2) !== 0){
                maxOdd = Math.max(maxOdd,Number(substr));
                found = true;
            }
        }
    }
    if(found)
        return maxOdd.toString();
    else 
        return "";
};


// console.log(ans);
// let arr = ['a','b','c']
// const ans = []
// for(let i = 0; i < arr.length; i++){
//     let subArr = []
//     for(let j = i; j < arr.length; j++){
//         subArr.push(arr[j])
//         ans.push([...subArr])
//     }

// }
// console.log(ans);