function majorityElement(arr){
    const map = new Map();
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    //O(n)
    console.log(map);
    for(let [k, v] of map){
        if(v > (arr.length / 2)){
            return k;
        }
    }
    //O(N)

}
console.log(majorityElement([1,2,1,12,3,2,3]));
//Time : O(N)
//Spcae : O(N)



//Moore Voting algo

function mooreVotingAlogo(arr){
    let count = 0;
    let element;
    for(let i = 0; i < arr.length;i++){
        if(count === 0){
            count = 1;
            element = arr[i];
        }else if(arr[i] === element){
            count++;
        }else{
            count--;
        }
    }
    // // if there always exits a mjority elementl
    // return element 

    let ctn = 0;
    for(let i = 0; i < arr.length;i++){
        if(element === arr[i]){
            ctn++;
        }
    }
    if(ctn > arr.length/2){
        return element
    }else{
        return -1;
    }
}
console.log(mooreVotingAlogo([1,2,1,12,3,2,3]));
