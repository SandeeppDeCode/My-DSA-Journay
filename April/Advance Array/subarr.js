const arr = [1,2,3,4];

for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length;j++){
        let subArr = arr.slice(i,j+1)
        console.log(subArr);
    }
}

// for(let i = 0; i < arr.length; i++){
//     for(let j = i; j < arr.length; j++){
//         let subArr = [];
//         for(let k = i; k <( j + 1); k++ ){
//             subArr.push(arr[k]);
//         }
//         console.log(subArr);
//     }
// }

const ans = []
let counti = 0;
let countj = 0;
for(let i = 0; i < arr.length; i++){
    let subArr = []
    counti++;
    for(let j = i; j < arr.length; j++){
        countj++;
        subArr.push(arr[j])
        ans.push([...subArr])
    }

}
console.log('i',counti,'j',countj);

// In this code, [...subArr] creates a new array that is a copy of subArr, so modifying subArr in the next iteration won’t affect the arrays that have already been pushed into ans. This should give you the correct output. 😊