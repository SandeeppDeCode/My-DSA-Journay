//1. Brutforce technique;
/* First sort than the array in descending order and the first element will be the largets  */
const largest  = (arr) => {
    arr.sort((a, b) =>  b - a);
    console.log(arr);
    return arr[0];
}
console.log(largest([1,5,3,7,992,56,3,2]));

/*
Time: O(N*LogN)
Space: O(1)
*/

/*
2. Optium Method
We can maintain a max variable that will update whenever the current value is greater than the value in the max variable. 
*/

const largestElement  = (arr) => {
    let max = -Infinity;
    let min = +Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i]
        if(arr[i]< min)
            min = arr[i]
    }
    return {max:max,min:min}
}

console.log(largestElement([1,5,3,7,992,56,3,2,-1]));
