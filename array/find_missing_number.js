//  Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N.
//  Find the number(between 1 to N), that is not present in the given array.

const array = [1,2,3,4,6,7,8,9]

/*
    1) Iterate through the array.
    2) Compare each element (arr[i]) with its expected value (i + 1).
    3) If an element does not match its expected value, return the missing number (i + 1).
*/

function findMissingNumber(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==i+1){
            return i+1
        }
    }
}

console.log(findMissingNumber(array))