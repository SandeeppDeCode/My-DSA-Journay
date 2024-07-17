// function printSubSequencesOfK(index,list,arr,sum,k,n){
//     if(index >= n){
//         if(sum === k) console.log(list) ;
//         return;
//     }

//     list.push(arr[index]);
//     sum += arr[index];
//     printSubSequencesOfK(index+1,list,arr,sum,k,n)
//     list.pop(arr[index]);
//     sum -= arr[index];
//     printSubSequencesOfK(index+1,list,arr,sum,k,n)
// }
// const arr = [1,2,1]
// console.log(printSubSequencesOfK(0,[],arr,0,2,arr.length))

function printSubSequencesOfK(index,arr,sum,k,n){
    if(index >= n){
        if(sum === k) return 1 ;
        return 0;
    }

    sum += arr[index];
    let l = printSubSequencesOfK(index+1,arr,sum,k,n)

    sum -= arr[index];
   let r =  printSubSequencesOfK(index+1,arr,sum,k,n)
   return l + r;
}
const arr = [1,2,1]
console.log(printSubSequencesOfK(0,arr,0,2,arr.length))