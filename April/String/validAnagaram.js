//using a frequncy counter 

/*
The efficient way to solve this problem is to use a frequency counter. A frequency counter is a data structure that keeps track of the frequency of each character in a string. Here’s how it works:

1. Create a frequency counter for each string.
2. For each character in the first string, increment its count in the first frequency counter.
3. For each character in the second string, decrement its count in the first frequency counter.
4. If the first frequency counter is all zeros at the end, then the two strings are anagrams.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const counter = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        counter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for(let count of counter){
        if(count !== 0){
            return false;
        }
    }

    return true;
};

console.log('Sandeep'.charCodeAt(1));