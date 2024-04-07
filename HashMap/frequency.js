const frequency = (arr) => {

    const hashmap = {};
    for(let i = 0; i < arr.length; i++){
        if(hashmap.hasOwnProperty(arr[i])){
            hashmap[arr[i]]++;
        }else{
            hashmap[arr[i]] = 1;
        }
    }
    return hashmap;
}
console.log(frequency([1,2,3,4,2,12,1,2,3]))


const frequency1 = (arr) => {

    const hashmap = {};
    for(const element of arr)
    {
        if(hashmap[element]){
            hashmap[element]++;
        }else{
            hashmap[element]= 1;
        }
    }
    return hashmap;
}

console.log(frequency1([1,2,3,4,2,12,1,2,3]))



const frequency2 = (arr) => {
    const hashmap = {};

    arr.forEach((element) => {
        hashmap[element] = (hashmap[element] || 0) + 1;
    });

    return hashmap;
};

console.log(frequency2([1, 2, 3, 4, 2, 12, 1, 2, 3]));
