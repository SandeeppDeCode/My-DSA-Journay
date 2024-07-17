
// freqcounter

let str = "sandeep"
const freqCounter = new Array(26).fill(0);

for(let i = 0; i < str.length;i++){
    freqCounter[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}
console.log(freqCounter);

console.log(String.fromCharCode(97));