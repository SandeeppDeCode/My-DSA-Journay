function isPalimdromeNumber(num){
    let originalNum = num;
    let reverse = 0
    while(num !== 0){
        let d = num % 10; //find the last digit to the number
        reverse = reverse * 10 + d; // 10+ 8 = 18 using this concept
        num = Math.floor(num / 10)  // removing the last digit of the number
    }
    return originalNum === reverse;
}

console.log(isPalimdromeNumber(1234))