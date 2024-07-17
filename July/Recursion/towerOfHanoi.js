//Tower of hanio

function TOH(n,start,aux,end) {
    if (n>0) {
        TOH(n-1,start,end,aux);
        console.log(`Move disk from ${start} to ${end}`);
        TOH(n-1,aux,start,end);
    }
    
}
TOH(3,"A","B","C");

//Move n-1 disk from start to aux using end;
//Move start to end;
//Move n-1 disk from aux to end using start;

//Main Rang Sharbaton Ka | Phata Poster Nikhla Hero | Atif Aslam, Chinmayi | Romantic Love Songs