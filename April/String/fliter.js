/*

The filter() method in JavaScript is a built-in function that creates a new array with all elements that pass a test provided as a function. It’s called on an array (arr in your question) and takes a callback function as an argument.
*/
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.filter(function(element) {
//     return element > 2;
// });
// console.log(newArr); // Output: [3, 4, 5]

let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(element => element > 2);
console.log(newArr); // Output: