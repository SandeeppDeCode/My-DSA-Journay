function printName(str,N){
    if(N === 0) return 

    console.log(str)
    printName(str,N-1);
}
console.log(printName("Sandeep",5));