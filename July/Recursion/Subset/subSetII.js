//Get me unique subsets

//Method 1- using Sets
//Method 2 - using recursion
function generateSubsets(arr) {

    const set = new Set();
    function helper(index=0,current=[]){
        if(index >= arr.length){

            // set.add([...current])  not working
            // Convert the subset to a string representation to ensure uniqueness

            //issue down the lien
            set.add(JSON.stringify(current));
            return;
        }

        current.push(arr[index]);
        
        helper(index+1,current);//take;
        current.pop();
        helper(index+1,current); //nottake;
    }
    helper();
    // Convert the string representations back to arrays
    return Array.from(set).map(subset => JSON.parse(subset));
}
console.log(generateSubsets([1,2,2]));

/*
The issue with your code is that the Set in JavaScript uses the SameValueZero algorithm to determine if an item is unique. 
For arrays, it checks for uniqueness based on reference equality, not by the content of the array.

When you use set.add([...current]), each time a new array is created (even if it has the same content as a previous one), it gets added to the Set as a new unique reference.
Therefore, arrays with identical content but different references are treated as distinct entries by the Set.
*/

function generateSubsetsRecursion(arr) {
    const result = [];

    function helper(index=0,current=[]) {
        result.push([...current]);
        for(let i = index; i < arr.length; i++){
            if( i !== index && arr[i] === arr[i-1])
                continue;

            current.push(arr[i]);
            helper(i+1,current);
            current.pop();
        }
    }
    helper();
    return result;
}

console.log(generateSubsetsRecursion([1,2,2]));