
const binarySearch = function(arr,target){
    let low = 0; 
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] === target) return mid;
        else if(target > arr[mid]) low = mid + 1;
        else if (target < arr[mid]) high = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],5));


const binarySearchR = function(arr,target,low,high){
    if(low > high){
        return -1;
    }
    let mid = Math.floor((low + high)/2)
    if(target === arr[mid]) return mid;
    else if (target > arr[mid]) return binarySearch(arr,target,mid+1,high);
    else if(target < arr[mid]) return binarySearch(arr,target,low,mid-1);
}

console.log(binarySearchR([1,2,3,4,5],5,0,4));

// time compelxity log2N