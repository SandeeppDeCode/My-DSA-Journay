//1. convert to string;

function palimdroneStr(num){
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('')
}
console.log(palimdroneStr(101))

//2. Using recurion 

function isPalim(str,start,end){
    if(start >= end)
        return true;

    return((str[start] === str[end])&& (str,start+1,end-1))
}

console.log(isPalim("mom",0,2));

// 3 effiecent Recursion

function isPalim(str,i,n){
    if(i >= (n/2)) return true
    if(str[i] !== str[n-i-1]) return false

    return isPalim(str,i+1,n)
}

console.log(isPalim("madam",0,"madam".length))