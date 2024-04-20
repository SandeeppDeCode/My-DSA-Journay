function frequencySort(s) {

    let freq = {};
    for(let ch of s){
        if(freq[ch]){
            freq[ch]++;
        }else{
            freq[ch] = 1;
        }
    }
    // Time and spce o(n)
    let sortedFre = Object.entries(freq).sort((a,b) => b[1] - a[1]) // time = nlogn and space o(n)
    let result = ''; 
    for(let [k,v] of sortedFre){
        result += k.repeat(v);
    }
    //time = o(n)
    return result

}

console.log(frequencySort('tree'));

/*
In JavaScript, the sort() function can take a comparator function as an argument to determine the order of sorting. The comparator function has two arguments, a and b, which represent two elements being compared.

In the context of the code, Object.entries(count) returns an array of key-value pairs from the count object. Each pair is an array where the first element (index 0) is the key (the character in this case), and the second element (index 1) is the value (the frequency of the character).

When we call sort((a, b) => b[1] - a[1]), a and b are these key-value pairs. a[1] and b[1] are the frequencies of the characters.

The comparator function b[1] - a[1] sorts the frequencies in descending order. If b[1] is greater than a[1], it returns a positive value, which means b should come before a. If b[1] is less than a[1], it returns a negative value, which means a should come before b. If they are equal, it returns 0, which means their order does not matter.

So, in summary, b[1] - a[1] is used to sort the characters based on their frequencies in descending order. b[1] and a[1] are the frequencies of the characters being compared. This is why we are using b[1] and a[1] in the sort() function. I hope this explanation helps! Let me know if you have any other questions. 😊
*/

function sortFreq(s) {
    let hash = new Array(256).fill(0);
    for(let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i)]++;
    }
    
    let result = '';
    let maxFreq = findMaxFrequency(hash);       

    while (maxFreq > 0) {
        for (let i = 0; i < 256; ++i) {
            if (hash[i] === maxFreq) {
                result += String.fromCharCode(i).repeat(hash[i]);
            }
        }
        maxFreq--; 
    }
    
    return result;

    function findMaxFrequency(hash) {
        let maxFreq = 0;
        for (let i = 0; i < 256; ++i) {
            maxFreq = Math.max(maxFreq, hash[i]);
        }
        return maxFreq;
    }
}
console.log(sortFreq('tree'));