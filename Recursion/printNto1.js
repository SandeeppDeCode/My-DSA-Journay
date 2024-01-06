function printNto1(N){
    if(N === 0) return;
    console.log(N);
    printNto1(N-1);
}
printNto1(5)


