//Geneartng all the subarray

// const arr = [1,2,3,4];
// const ans = [];
// for(let i = 0; i < arr.length; i++){
//     for(let j = i; j < arr.length; j++){
//         let subarr = arr.slice(i, j + 1);
//         ans.push(subarr);
//     }
// }
// console.log(ans);


const arr = [1,2,3,4];
const ans = [];
for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
        let subarr = [];
        for(let k = i; k <= j; k++){
            subarr.push(arr[k]);
        }
        ans.push(subarr);
    }
}
console.log(ans);
