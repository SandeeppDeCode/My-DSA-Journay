const ans =[];
function printSubSequences(index,list,arr,n)
{
    if(index >= n){
       ans.push(list.slice())
        return ;
    }
    //code to take it;
    list.push(arr[index]);
    printSubSequences(index+1,list,arr,n);
    //code to not take it;
    list.pop(arr[index]);
    printSubSequences(index+1,list,arr,n)
}
const arr = [1,2,3]
printSubSequences(0,[],arr,arr.length)

console.log(ans)

