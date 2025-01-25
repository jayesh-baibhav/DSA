/*
    Problem Statement: Given a matrix if an element in the matrix is 0,
    then you will have to set its entire column and row to 0 and then return the matrix.
*/

const matrix = [[1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]];

/*
    Process:
    1) **Mark rows and columns to be zeroed**:
       - Traverse the matrix and, for each element that is 0, mark the corresponding row and column in the first row and first column.
       - Use the first element of the row (`matrix[i][0]`) to mark rows, and use the first element of the column (`matrix[0][j]`) to mark columns.
       - Special handling for the first row and first column is required because they are used for marking.

    2) **Zero out the elements**:
       - Traverse the matrix again, starting from row 1 and column 1. If an element at `matrix[i][j]` is non-zero and the corresponding row or column is marked, set `matrix[i][j]` to 0.

    3) **Handle first row and first column**:
       - If the first element of the first row is 0, set the entire first row to 0.
       - If any element in the first column is marked as 0, set the entire first column to 0.

    4) Return the modified matrix.
*/

function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let col0 = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}


const ans = zeroMatrix(matrix)
for(let arr of ans){
    console.log(arr)
}
