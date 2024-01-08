function printSubSequences(index,list,arr,n)
{
    if(index >= n){
        console.log(list);
        return ;
    }
    //code to take it;
    list.push(arr[index]);
    printSubSequences(index+1,list,arr,n);
    //code to not take it;
    list.pop(arr[index]);
    printSubSequences(index+1,list,arr,n)
}
const arr = [3,1,2]
printSubSequences(0,[],arr,arr.length)
