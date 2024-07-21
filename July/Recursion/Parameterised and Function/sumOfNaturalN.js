/*
Sum of Natural Number 
Parameterised way and functionl way;
*/
// n(n+1)/2 = 

//Parameterised way

function f1(i,sum) {
    if(i < 1)
    {
        console.log("Sum =",sum);
        return;
    }
    f1(i-1,sum+i);
    
}
f1(3,0);


function f(n) {
    if(n == 0)
        return 0;
    return n + f(n-1);
}
console.log(f(3));

