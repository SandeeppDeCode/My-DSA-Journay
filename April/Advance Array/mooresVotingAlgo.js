//To find the majority element 
//Time Compleity = O(N)

function moorVotingAlgo(nums){
    let cnt = 0;
    let element;
    for(let i = 0; i < nums.length; i++){
        if(cnt === 0){
            element = nums[i];
        }
        if(element === nums[i]){
            cnt++;
        }else{
            cnt--;
        }
    }

    // Check if the candidate is indeed the majority element
    cnt = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === element){
            cnt++;
        }
    }

    if(cnt > nums.length / 2){
        return element;
    }else{
        return null; // No majority element
    }
}

console.log(moorVotingAlgo([1,2,1,1,2,2,9,9,9,4,2]));


/*

It’s used to find the majority element in a sequence.
The majority element is one that appears more than N/2 times.
The algorithm works in O(N) time complexity and O(1) space complexity.
It finds a candidate for the majority element but doesn’t guarantee it.
A second pass over the array is needed to confirm if the candidate is indeed the majority.
And about your implementation:

It correctly implements the Moore’s Voting Algorithm.
It finds a candidate for the majority element.
To ensure the candidate is indeed the majority, a second pass over the array is needed to count its occurrences and confirm if it is greater than N/2.
*/
