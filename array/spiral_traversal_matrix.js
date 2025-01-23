//  Problem Statement: Given a Matrix, print the given matrix in spiral order.

let matrix = [[1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11, 12],
             [13, 14, 15, 16]];

/*
    Process:
    1) Define boundaries for traversal: `top`, `bottom`, `left`, and `right`.
       - `top` represents the current top row.
       - `bottom` represents the current bottom row.
       - `left` represents the current left column.
       - `right` represents the current right column.
    2) Use a `while` loop to traverse until all elements are visited:
       - Traverse the top row from `left` to `right`.
       - Traverse the right column from `top` to `bottom`.
       - If there are rows left, traverse the bottom row from `right` to `left`.
       - If there are columns left, traverse the left column from `bottom` to `top`.
    3) Adjust the boundaries after each traversal.
    4) Add each element to the `ans` array during the traversal.
    5) Return the `ans` array containing the spiral order.
*/

function printSpiral(mat) {
    let ans = [];
  
    let n = mat.length;
    let m = mat[0].length;
  
    let top = 0, left = 0, bottom = n - 1, right = m - 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++)
        ans.push(mat[top][i]);
  
      top++;
  
      for (let i = top; i <= bottom; i++)
        ans.push(mat[i][right]);
  
      right--;
  
      if (top <= bottom) {
        for (let i = right; i >= left; i--)
         ans.push(mat[bottom][i]);
  
        bottom--;
      }

      if (left <= right) {
        for (let i = bottom; i >= top; i--)
          ans.push(mat[i][left]);
  
        left++;
      }
    }
    return ans;
}
      
console.log(printSpiral(matrix))