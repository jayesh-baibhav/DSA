//  Problem Statement: Given an integer array sorted in non-decreasing order,
//  remove the duplicates in place such that each unique element appears only once. 
//  The relative order of the elements should be kept the same.

const array1 = [1,1,2,2,2,3,3,4,4,4,4,5,5,5]
const array2 = [1,1,2,2,2,3,3,4,4,4,4,5,5,5]

/*
    1) Create a Set from the array to automatically filter out duplicates.
    2) Convert the Set back to an array (`uniqueArr`) to maintain sequential order.
    3) Copy the unique elements from `uniqueArr` back into the original array.
    4) Return a slice of the modified array containing only the unique elements.
*/

function removeDuplicates_bruteForce(arr){
    let set = new Set(arr)
    let uniqueArr = Array.from(set)
    for(let i=0;i<uniqueArr.length;i++){
        arr[i] = uniqueArr[i]
    }
    return arr.slice(0,uniqueArr.length)
}

/*
    1) Initialize a pointer `i` to track the position of unique elements.
    2) Loop through the array using another pointer `j` starting from index 1.
    3) If the current element at `arr[j]` is not equal to `arr[i]`, increment `i` and copy `arr[j]` to `arr[i]`.
    4) Continue until all elements are processed.
    5) Return a slice of the modified array containing only the unique elements.
*/

function removeDuplicates_optimal(arr){
    let i = 0
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
    return arr.slice(0,i+1)
}


console.log(removeDuplicates_bruteForce(array1))
console.log(removeDuplicates_optimal(array2))