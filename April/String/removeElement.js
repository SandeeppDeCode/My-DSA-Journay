function removeElement(arr, index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}
console.log(removeElement([0,1,2,3,4],1));

let arr = [1, 2, 3, 4, 5];
console.log("Before removal:", arr);

let valueToRemove = 3;
arr = arr.filter(item => item !== valueToRemove);

console.log("After removal:", arr);
