//Print alll the permauation of n 

//Method 1: using a hash Map;
//Method 2: Doing a swap
function printAllPermuataion(arr) {
    const result = [];
    function helper(current,map) {
        if(current.length === arr.length){
            result.push([...current]);
            return;
        }
        let i;
        for( i = 0; i < arr.length;i++){
            console.log("Map", map[i]);
            if(map[i] === false){
                map[i] = true;
                current.push(arr[i]);
                helper(current,map);
                current.pop();
                map[i] = false;
            }
        }
        console.log("I",i);
    }
    helper([],Array(arr.length).fill(false));
    return result;
}
console.log(printAllPermuataion([1,2]));

function printAllPermuataion2(arr){
    const result = [];
    function swap(index,i,arr) {
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
    function helper(index,arr) {
        if(index >= arr.length){
            result.push([...arr]);
            return;
        }

        for(let i = index; i < arr.length;i++){
            // [arr[index],arr[i]]=[arr[i],arr[index]]; 
            swap(index,i,arr);
            helper(index+1,arr);
            swap(index,i,arr);
            // [arr[index],arr[i]]=[arr[i],arr[index]];
        }
    }
    helper(0,arr);
    return result;
}

console.log(printAllPermuataion2([1,2,3]));

