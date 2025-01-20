/*
    Problem Statement:
    There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements.
    Without altering the relative order of positive and negative elements, 
    you must return an array of alternately positive and negative values.

    Note: Start the array with positive elements.
*/

const array = [1,2,-4,-5]

/*
    Process:
    1) Separate the input array into two arrays:
       - `pos` for positive numbers.
       - `neg` for negative numbers.
    2) Iterate over half the length of the input array and fill it alternately with values from `pos` and `neg`.
    3) Place the positive number at even indices and the negative number at odd indices.
    4) Return the rearranged array.
*/

function reArrangeBySign(arr){
    let pos = []
    let neg = []

    for(let num of arr){
        if(num<0){
            neg.push(num)
        }else{
            pos.push(num)
        }
    }

    for(let i=0;i<arr.length/2;i++){
        arr[2*i] = pos[i]
        arr[2*i+1] = neg[i]
    }

    return arr
}

/*
    Process:
    1) Create an auxiliary array `ans` initialized to zero, of the same length as the input array.
    2) Use two pointers:
       - `posIndex` initialized to 0 for placing positive numbers at even indices.
       - `negIndex` initialized to 1 for placing negative numbers at odd indices.
    3) Iterate through the input array:
       - If the current element is negative, place it at `negIndex` and increment `negIndex` by 2.
       - If the current element is positive, place it at `posIndex` and increment `posIndex` by 2.
    4) Return the rearranged result array `ans`.
*/

function reArrangeBySign_optimal(arr){
    let ans = new Array(arr.length).fill(0)
    let posIndex=0
    let negIndex=1

    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            ans[negIndex]=arr[i]
            negIndex+=2
        }else{
            ans[posIndex]=arr[i]
            posIndex+=2
        }
    }
    return ans
}

console.log(reArrangeBySign(array))
console.log(reArrangeBySign_optimal(array))