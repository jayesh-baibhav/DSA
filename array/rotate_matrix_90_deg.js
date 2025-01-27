/*
Approach: 
    Take another dummy matrix of n*n, and then take the first row of the matrix 
    and put it in the last column of the dummy matrix, take the second row of the matrix,
    and put it in the second last column of the matrix and so.
*/

const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]]

/*
    Process:
    1) Create a new matrix `rotated` of the same size as the input matrix, initialized with zeros.
    2) Iterate over each element of the input matrix:
        - For an element at position (i, j) in the original matrix, place it at position (j, n - i - 1)
            in the rotated matrix. This achieves a 90-degree clockwise rotation.
    3) Return the new matrix `rotated`, which represents the rotated version of the input matrix.
*/

function rotateMatrix_bruteForce(matrix) {
    const n = matrix.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }
    
    return rotated;
}

/*
    Process:
    1) Transpose the matrix:
        - Iterate through the matrix using two nested loops.
        - For each element at position (i, j) where j < i, swap it with the element at position (j, i).
        - This converts the rows into columns and vice versa.
    
    2) Reverse each row:
        - Iterate through each row of the matrix and reverse it.
        - This step effectively rotates the matrix 90 degrees clockwise after transposition.
        
    3) Return the modified matrix.
*/

function rotateMatrix_optimal(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<i;j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }

    return matrix
}

ansA = rotateMatrix_bruteForce(matrix)
for(let arr of ansA){
    console.log(arr)
}

ansB = rotateMatrix_optimal(matrix)
for(let arr of ansB){
    console.log(arr)
}


