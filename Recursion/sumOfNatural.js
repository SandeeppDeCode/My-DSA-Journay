// 1. Parameterized way
function sumOfNatural(i,sum=0){
    if(i < 1){
        console.log(sum);
        return;
    }
    return sumOfNatural(i-1,sum+i)
}
console.log(sumOfNatural(5,0));


//2.Function Way 

function sumOfN(N){
    if(N === 0) return 0;
    return N + sumOfN(N-1)
}
console.log(sumOfN(5));


//3. Naive and optimised way

function sum(N){
    return (N * (N+1)) / 2;
}

console.log(sum(5));