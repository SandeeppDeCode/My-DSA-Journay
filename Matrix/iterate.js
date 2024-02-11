/*  [1, 2, 3],  -> rows | column
    [4, 5, 6],
    [7, 8, 9]
*/

// [0,0  0,1  0,2]
// [1,0  1,1  1,2]
// [2,0  2,1, 2,2]

const iterate = (mat) => {
    for(let i = 0; i < mat.length;i++){
        for(let j = 0; j < mat[i].length;j++){
            console.log(mat[i][j]);
        }
    }
}
iterate([[1,2,3],[4,5,6],[7,8,9]])
