//  Problem Statement: You are given an array of integers, 
//  your task is to move all the zeros in the array to the end of the array 
//  and move non-negative integers to the front by maintaining their order.

const array_A = [1,0,0,2,3,0,4,0,5]
const array_B = [1,0,0,2,3,0,4,0,5]

/*
    1) Create an empty temporary array `tempArr` to store non-zero elements.
    2) Traverse the input array and push all non-zero elements to `tempArr`.
    3) Iterate through the original array:
       - For indices less than the length of `tempArr`, copy the non-zero elements back into `arr`.
       - For remaining indices, set elements to zero.
    4) Return the modified array.
*/

function moveZeroesToEnd_naiveSoln(arr){
    let tempArr = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            tempArr.push(arr[i])
        }
    }
    for(let i=0;i<arr.length;i++){
        if(i<tempArr.length){
            arr[i]=tempArr[i]
        }else{
            arr[i]=0
        }
    }
    return arr;
}

/*
    1) Initialize `j` to track the position of the first encountered zero.
       - Traverse the array to find this initial position (`j`).
       - If no zeros are found, return the original array as it's already optimized.
    2) Continue traversing the array from `j + 1`:
       - When a non-zero element is found, swap it with the element at position `j`.
       - Increment `j` to point to the next position for swapping.
    3) Return the modified array.
*/

function moveZeroesToEnd_optimal(arr){
    let j = -1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            j=i
            break;
        }
    }
    if(j==-1) return arr

    for(let i=j+1;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            j++
        }
    }
    return arr
}


console.log(moveZeroesToEnd_naiveSoln(array_A))
console.log(moveZeroesToEnd_optimal(array_B))