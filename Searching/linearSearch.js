//Traverse each and every element and check 

function linearSearch(item,arr){
    for(let i = 0 ; i < arr.length;i++){
        if(item === arr[i]){
            return i;
        }
    }
    return -1
}

// Time : Best Case = O(1)
//        Worst Case = O(N)
// Spcae = O(1);