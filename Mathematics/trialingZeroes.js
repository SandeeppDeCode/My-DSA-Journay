function countZero(num) {
    let noOfZeroes = 0;
    while(num !== 0){
        if(num % 10 === 0){
            noOfZeroes++;
        }
        num = Math.floor(num / 10);
    }
    return noOfZeroes
}
console.log(countZero(120));

// 1. Naive approach -> calculate the factorial and then count the no of zeroes
// 2. efficient approach - > 

/*
The idea is to consider prime factors of a factorial n. A trailing zero is always produced by prime factors 2 and 5. If we can count the number of 5s and 2s, our task is done. Consider the following examples.
n = 5: There is one 5 and 3 2s in prime factors of 5! (2 * 2 * 2 * 3 * 5). So a count of trailing 0s is 1.
n = 11: There are two 5s and eight 2s in prime factors of 11! (2 8 * 34 * 52 * 7). So the count of trailing 0s is 2.
*/

function findTrailingZeros(n) {
    if (n < 0) return -1;
  
    let count = 0;
  
    for (let i = 5; n / i >= 1; i *= 5) {
      count += Math.floor(n / i);
    }
  
    return count;
  }
  
  const n = 100;
  console.log(`Count of trailing 0s in ${n}! is ${findTrailingZeros(n)}`);


//the most effiecient 

var trailingZeroes = function(n) {
    let result = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        result += n;
    }

    return result;
};

