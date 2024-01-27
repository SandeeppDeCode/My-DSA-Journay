const test = (str) => {
    const arr = str.split(" ");
    const ans = [];
    for(let i = arr.length-1; i >=0; i--){
        if(arr[i] !== ""){
            ans.push(arr[i])
        }
    }
    return ans.join(' ')
}
console.log(test("  a good   example  "));

//Time complexity : O(M + N) 



var reverseWords = function(s) {
    return s.split(" ").filter(word => word !== "").reverse().join(' ');
};

// This version performs the following steps:

// 1. split(" "): Splits the input string into an array of words using space as the delimiter.
// 2. filter(word => word !== ""): Filters out any empty strings from the array.
// 3. reverse(): Reverses the filtered array of words.
// 5. join(' '): Joins the reversed array back into a string using space as the separator

// The time complexity is still O(N + M), where N is the length of the input string s, and M is the total number of characters in the resulting reversed string. The space complexity remains O(M).