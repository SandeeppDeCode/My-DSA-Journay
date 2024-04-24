//The code iterates through the array, continuously updating the largest and second largest values based on the current element, ensuring that the largest value is always the maximum element in the array and the second largest is the maximum among the rest.

const arr = [1,2,34,5,6,34,300];
let largest = arr[0];
let secondLargest = -Infinity;

for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    } else if(arr[i] > secondLargest && arr[i] !== largest){
        secondLargest = arr[i];
    }
}

console.log(largest, secondLargest); // Outputs: 300, 34
