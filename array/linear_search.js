//  Problem Statement: Given an array, and an element num, the task is to find if num is present in the given array or not.

const array = [4,3,2,1,0,5,6,7,8,9]

/*
    1) Iterate through each element in the array.
    2) Compare the current element (arr[i]) to the target element (toBeSearched).
    3) If a match is found, return a message with the element and its index.
    4) If the loop completes without finding the element, return a "not found" message.
*/

function linearSearch(arr,toBeSearched){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==toBeSearched){
            return `${toBeSearched} is found at index ${i}`
        }
    }
    return `oops! not found`
}

console.log(linearSearch(array,5))
console.log(linearSearch(array,10))
