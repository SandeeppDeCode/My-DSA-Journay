

//Linear search 
let el = 4;
let arr = [1,2,3,2,4,5,3]
for(let i = 0; i < arr.length;i++){
    if(arr[i] === el){
        console.log(i);
        break;
    }
    
}

console.log(arr.indexOf(4))