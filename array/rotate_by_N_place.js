//  Problem Statement: Given an array of integers, rotate array by k elements left.

const array = [0,1,2,3,4,5,6,7,8,9]

/*
    1) Store the first `n` elements in a temporary array (`tempArr`).
    2) Shift the remaining elements of the array to the left by `n` positions.
    3) Copy the elements from `tempArr` to the end of the array.
    4) Return the modified array.

    Note:
    - `array.slice(0, n)` creates a shallow copy of the first `n` elements.
    -  Ensure that `n` does not exceed the length of the array to avoid errors.
*/
function leftRotate(arr,n){
    let tempArr = array.slice(0,n)
    console.log(tempArr)
    for(let i=0;i<arr.length-n;i++){
        arr[i]=arr[n+i]
    }
    for(i=0;i<tempArr.length;i++){
        arr[arr.length-n+i]=tempArr[i]
    }
    return arr
}

console.log(leftRotate(array,3))