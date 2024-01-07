//Fibonacci is an example of multiple recurisve call


function fiboncacci(n){
    if(n <= 1) return n;
    let last = fiboncacci(n-1);
    let slast = fiboncacci(n-2)
    return last + slast;
}

console.log(fiboncacci(4))