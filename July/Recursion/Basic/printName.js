function print(n,name) {
    if(n <= 0){
        return;
    }
    console.log("N =",n,name);
    n--;
    print(n,name);
}
print(5,"Sandeep");

//function over then you return 
console.log("\n\n")

//function call 1 to 3;
function f(i,n){
    if(i > n){
        return;
    }
    console.log("I =",i,"Sandeep");
    f(i+1,n);

}

f(1,3);

//f(1,3) -> f(2,3) -> f(3,3) -> f(4,3)

/*
Time : O(N);
Stack Space : O(N);
*/
