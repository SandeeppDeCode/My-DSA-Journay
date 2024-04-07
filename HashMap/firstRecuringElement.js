//Naivie

function firstOccuringElement(arr){
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        for(let j = i+1; j < arr.length;j++){
            if(element === arr[j]){
                return element;
            }
        }
    }
    return undefined
}
// Time Complexity O(N^2)
console.log(firstOccuringElement([1,2,3,4,4]));

function firstOccuringElement2(arr){
    let hashMap = {};
    for(let i = 0; i < hashMap.length; i++){
        if(hashMap[arr[i]]){
            return arr[i]
        }else{
            hashMap[arr[i]] = 1;
        }
    }
}
// Time Complexity O(N)
// Space O(N)
console.log(firstOccuringElement2([1,2,3,4,4]));