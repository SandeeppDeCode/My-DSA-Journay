// 1. Naive Brutforce approcach for evry x search x+1 element
const arr =  [3, 8, 5, 7, 6];
function linearSearch(arr,num) {
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === num) return true;
    }
    return false;
}
function longestConsecutive(arr) {
    let n = arr.length;
    let longest = 1;
    for(let i = 0; i < n; i++){
        let x = arr[i];
        let count = 1;
        while(linearSearch(arr,x+1) === true){
            x += 1;
            count += 1;
        }
        longest = Math.max(longest,count);
    }
    return longest;
}
console.log(longestConsecutive(arr));
/*
Time  : O(N^2);
Space  : O(1);
*/

// here are printing the sequecen also 

function linearSearch(arr, num) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return true;
    }
    return false;
}

function longestConsecutive(arr) {
    let n = arr.length;
    let longest = [];
    for(let i = 0; i < n; i++){
        let x = arr[i];
        let count = [x];
        while(linearSearch(arr, x+1) === true){
            x += 1;
            count.push(x);
        }
        if(count.length > longest.length){
            longest = count;
        }
    }
    return longest;
}

console.log(longestConsecutive(arr));

// Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);


//Better solution by sorting the arr


function longestSuccessiveElements(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    // sort the array:
    arr.sort((a, b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    // find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
}
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);

/*
Time : O(nlogn)
Space : O(1)
*/


//Optimal solution using set 

function longestSuccessiveElements(arr) {
    let set = new Set(arr); // convert array to set
    let longest = 0;

    for(let num of set) {
        // if num - 1 is not in the set, then num is the first element of a sequence
        if(!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while(set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longest = Math.max(longest, currentStreak);
        }
    }
    return longest;
}
/*
Time : O(N);
Space : O(N);
*/