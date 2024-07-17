function tower(n,start,aux,end){
    if(n > 0){
        tower(n-1,start,end,aux);
        console.log('Move disk ' + n + ' from ' + start + ' to ' + end);
        tower(n-1,aux,start,end );
    }
}
tower(3,"A","B","C")

//Move 