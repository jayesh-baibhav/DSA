//  Problem Statement: Given an array that contains only 1 and 0
//  return the count of maximum consecutive ones in the array.

const array = [1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0]

/*
    1) Initialize `temp` to track the current count of consecutive `1`s.
    2) Initialize `res` to store the maximum count found so far.
    3) Traverse the array:
       - If the current element is `0`, reset `temp` to `0`.
       - If the current element is `1`, increment `temp` and update `res` if `temp` exceeds `res`.
    4) Return the maximum consecutive count stored in `res`.
*/

function findMaximumConsecutiveOne(arr){
    let temp=0
    let res=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            temp=0
        }else if(arr[i]==1){
            temp++
            if(temp>res){
                res=temp
            }
        }
    }
    return res
}

console.log(findMaximumConsecutiveOne(array))