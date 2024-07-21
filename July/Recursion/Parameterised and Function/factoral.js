//para way
function f(i,fact=1) {
    if(i < 1){
        console.log(fact);
        return;
    }
    f(i-1,fact*i);
}
f(5);

//functoional way;

function fact(n){
    if(n === 0)
        return 1;
    
    return n * fact(n-1);
}
console.log(fact(5));

//Time  = O(N);
//Space = O(N);