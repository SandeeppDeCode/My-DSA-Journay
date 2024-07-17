/*151. Reverse Words in a String
Given an input string s, reverse the order of the words.
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function(s) {
    const arr = s.split(" ");
    const ans = [];
    for(let i = arr.length-1; i >=0; i--){
        if(arr[i] !== ""){
            ans.push(arr[i])
        }
    }
    return ans.join(' ')
};

var reverseWords2 = function(s) {
    return s.split(" ").filter(word => word !== "").reverse().join(' ');
};
var reverseWords3 = function (s) {
    const arr = s.split(" ").filter(word => word !== "");
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join(' ');
};


/*

It’s a common misconception, but the time complexity of the array reversal function is actually O(n), not O(log n). Here’s why:

In each iteration of the loop, we’re indeed putting two items in their correct places (by swapping the start and end elements). However, we still have to go through half of the array’s length in iterations. Since the number of iterations is directly proportional to n (the length of the array), the time complexity is O(n), not O(log n).

O(log n) time complexity is characteristic of algorithms that reduce the problem size by a factor at each step, such as binary search where we halve the search space in each step. In the case of the array reversal function, we’re not reducing the problem size by a factor at each step; we’re simply moving the start and end pointers towards the center of the array.

I hope this clears up the confusion. If you have any more questions, feel free to ask! I’m here to help. 😊
*/


function check(str){
    let words = [];
    let word = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word += str[i];
        } else if (word !== '') {
            words.push(word);
            word = '';
        }
    }
// Add the last word if it's not empty
    if (word !== '') {
        words.push(word);
    }
    return words;
}
console.log(check("a good   example"));