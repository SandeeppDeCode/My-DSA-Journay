function countOnes(num) {
    let strNum = num.toString(2);
    let count = 0;
    for(let i = 0; i < strNum.length; i++){
        if(strNum[i] === '1'){
            count++;
        }
    }
    return count;
}

function countOnes2(num) {
    let count = 0;
    while(num){
        count += num & 1;
        console.log(num & 1);
        num >>= 1;
    }
    return count 
}

// Usage:
let num = 5;
console.log(countOnes2(num));  // This will output the count of '1's in the binary representation of num

// Pre-compute the lookup table
var bitsSetTable256 = new Array(256);
for (var i = 0; i < 256; i++) {
    bitsSetTable256[i] = (i & 1) + bitsSetTable256[i / 2];
}

var countBits = function(n) {
    return bitsSetTable256[n & 0xff] +
           bitsSetTable256[(n >> 8) & 0xff] +
           bitsSetTable256[(n >> 16) & 0xff] +
           bitsSetTable256[n >> 24];
};

