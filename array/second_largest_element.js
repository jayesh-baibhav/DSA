//  Problem Statement: Given an array, 
//  find the second largest element in the array. 
//  Print ‘-1’ in the event that it doesn’t exist.

const array = [12, 45, 78, 12, 67, 89, 45, 56, 78, 67]

// We use two variables: large, and second_large.
// Initialize large and second_large to -Infinity (INT_MIN equivalent).

/*
    1) Find the largest elements in a single traversal of the array.
    2) Traverse the array again to find:
    - The element just smaller than the largest (second largest).
*/

function secondLargestElement_twoTaversal(arr){
    let [largest,second_largest] = [-Infinity,-Infinity]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>second_largest && arr[i]!==largest){
            second_largest=arr[i]
        }
    }
    return second_largest
}

/*
    During traversal:
    - If the current element is larger than 'large', update 'second_large' and 'large'.
    - Else if the element is larger than 'second_large', update 'second_large'.

    After the traversal, 'second_large' will hold the second largest element.
*/

function secondLargestElement_singleTraversal(arr){
    let [largest,second_largest] = [-Infinity,-Infinity]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            second_largest=largest
            largest=arr[i]
        }else if(arr[i]>second_largest && arr[i]!==largest){
            second_largest=arr[i]
        }
    }
    return second_largest
}

console.log(secondLargestElement_twoTaversal(array))
console.log(secondLargestElement_singleTraversal(array))