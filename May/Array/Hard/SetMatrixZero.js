const arr = [[1,1,1],[1,0,1],[1,1,1]];
const zero = [];

// Capture the position of all the zeros in the matrix
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === 0){
            zero.push([i,j]);
        }
    }
}

// Iterate through the 'zero' array and set the corresponding row and column in 'arr' to zero
for(let k = 0; k < zero.length; k++){
    let [row, col] = zero[k];
    
    // Set the entire row to zero
    for(let i = 0; i < arr[row].length; i++){
        arr[row][i] = 0;
    }

    // Set the entire column to zero
    for(let i = 0; i < arr.length; i++){
        arr[i][col] = 0;
    }
}

// Print the modified array
console.log(arr);


