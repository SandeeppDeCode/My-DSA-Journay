function f(n) {
    if(n <= 0)
        return;

    f(n-1);
    console.log(n);
    
}
f(5);

