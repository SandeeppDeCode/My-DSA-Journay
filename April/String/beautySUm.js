/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let totalBeauty = 0;
    for (let i = 0; i < s.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < s.length; j++) {
            if(s.length > 2){
            freq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            totalBeauty += Math.max(...freq) - Math.min(...freq.filter(v => v > 0));
            }
        }
    }
    return totalBeauty;
};

console.log(beautySum("aabcb"))
/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let totalBeauty = 0;
    for (let i = 0; i < s.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < s.length; j++) {
            freq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            totalBeauty += Math.max(...freq) - Math.min(...freq.filter(v => v > 0));
        }
    }
    return totalBeauty;
};

