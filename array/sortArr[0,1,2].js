/*
    Problem Statement: Given an array consisting of only 0s, 1s, and 2s. 
    Write a program to in-place sort the array without using inbuilt sort functions.
    ( Expected: Single pass-O(N) and constant space)
*/

const array = [2,0,2,1,1,0]

/*
    1) Initialize three counters: `cnt_0`, `cnt_1`, and `cnt_2` to count occurrences of 0s, 1s, and 2s.
    2) Traverse the array:
       - Increment the appropriate counter based on the element value.
    3) Overwrite the original array using the counters:
       - Fill the first `cnt_0` positions with 0s.
       - Fill the next `cnt_1` positions with 1s.
       - Fill the remaining positions with 2s.
    4) Return the sorted array.
*/

function sortArr_A(arr){
    let cnt_0=0
    let cnt_1=0
    let cnt_2=0

    for(let num of arr){
        if(num==0) cnt_0++
        else if(num==1) cnt_1++
        else cnt_2++
    }

    for(let i=0;i<arr.length;i++){
        if(i<cnt_0) arr[i]=0
        else if(i<cnt_0+cnt_1) arr[i]=1
        else arr[i]=2
    }
    return arr  
}

/*
    1) Initialize three pointers:
       - `low` points to the beginning of the array (0 region).
       - `mid` is used to traverse the array.
       - `high` points to the end of the array (2 region).
    2) Traverse the array using a `while` loop until `mid <= high`:
       - If `arr[mid] == 0`: Swap with `arr[low]`, increment `low` and `mid`.
       - If `arr[mid] == 1`: Simply increment `mid`.
       - If `arr[mid] == 2`: Swap with `arr[high]`, decrement `high`.
    3) Return the sorted array.
*/

function sortArr_B(arr){
    let low=0
    let mid=0
    let high=arr.length-1

    while(mid<=high){
        if(arr[mid]==0){
            [arr[low],arr[mid]]=[arr[mid],arr[low]]
            low++
            mid++
        }else if(arr[mid]==1){
            mid++
        }else{
            [arr[mid],arr[high]]=[arr[high],arr[high]]
            high--
        }
    }
    return arr
}

console.log(sortArr_A(array))
console.log(sortArr_B(array))