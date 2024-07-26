//Generation of subset suing power set concept
//Print all the subset ncluding the duplicate subsets also;

//Time complexity - O(2^n)

function generatePowerSet(arr) {
    const result = [];
    const totalSubsets = Math.pow(2, arr.length);

    for (let i = 0; i < totalSubsets; i++) {
        let subset = [];
        for (let j = 0; j < arr.length; j++) {
            // Check if the jth bit in the ith subset is set. If set, include arr[j] in this subset.
            if (i & (1 << j)) {
                subset.push(arr[j]);
            }
        }
        result.push(subset);
    }

    return result;
}


function generateSubsetsRecursion(arr) {

    const result = [];
    function helper(index=0,current=[]){
        if(index >= arr.length){


            result.push([...current]) // [...copyof array]
            return;
        }

        current.push(arr[index]);
        
        helper(index+1,current);//take;
        current.pop();
        helper(index+1,current); //nottake;
    }
    helper();
    return result;
}
console.log(generateSubsetsRecursion([1,2,2]));

