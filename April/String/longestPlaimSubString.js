// Given a string s, return the longest  palindromic  substring in s.
//A string is palindromic if it reads the same forward and backward.

function isPalindromic(str){
    const reverse = str.split('').reverse().join('');
    return reverse === str
}


var longestPalindrome = function(s) {
    const arr = []
    let longest = '';
    for(let i = 0; i < s.length;i++){
        let subStr = '';
        for(let j = i; j < s.length;j++){
            subStr += s[j];
            if(isPalindromic(subStr)){
                arr.push(subStr);
            }
        }
    }
    
    for(let i = 0; i < arr.length;i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
};
console.log(longestPalindrome("babad"));


function longestPalindrome(s) {
    let max = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + max.length; j < s.length; j++) {
            let substr = s.substring(i, j + 1);
            let reversedSubstr = substr.split('').reverse().join('');
            if (substr === reversedSubstr && substr.length > max.length) {
                max = substr;
            }
        }
    }
    return max;
}

console.log(longestPalindrome("babad"));  // Outputs: "bab"
 