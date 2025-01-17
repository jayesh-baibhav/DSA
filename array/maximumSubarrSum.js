//  Problem Statement: Given an integer array arr,
//  find the contiguous subarray (containing at least one number) 
//  which has the largest sum and returns its sum and prints the subarray.

const array = [-2,1,-3,4,-1,2,1,-5,4]

/*
    1) Initialize `maxSum` to `-Infinity` to handle cases where all elements are negative.
    2) Use three nested loops:
       - Outer loop (`i`) marks the start of the subarray.
       - Middle loop (`j`) marks the end of the subarray.
       - Inner loop (`k`) computes the sum of elements in the subarray from `i` to `j`.
    3) If the computed `currSum` is greater than `maxSum`, update:
       - `maxSum` with `currSum`.
       - `startIndex` and `endIndex` with the current subarray indices.
    4) After processing all subarrays, return the subarray and its sum as a formatted string.
*/

function findMaximumSubArrSum_bruteForce(arr){
    let maxSum = -Infinity
    let startIndex = 0
    let endIndex = 0
    for(let i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            let currSum = 0
            for(k=i;k<=j;k++){
                currSum += arr[k]
            }
            if(currSum>maxSum){
                maxSum=currSum
                startIndex=i
                endIndex=j
            }
        }
    }
    return `[${arr.slice(startIndex,endIndex+1)}], ${maxSum}`
}

/*
    1) Initialize `maxSum` to `-Infinity` to handle cases where all elements are negative.
    2) Use two nested loops:
       - Outer loop (`i`) marks the start of the subarray.
       - Inner loop (`j`) calculates the cumulative sum (`currSum`) of the subarray starting at `i` and ending at `j`.
    3) If the computed `currSum` is greater than `maxSum`, update:
       - `maxSum` with `currSum`.
       - `startIndex` and `endIndex` with the current subarray indices.
    4) After processing all subarrays, return the subarray and its sum as a formatted string.
*/

function findMaximumSubArrSum_twoLoop(arr){
    let maxSum = -Infinity
    let startIndex = 0
    let endIndex = 0
    for(let i=0;i<arr.length;i++){
        let currSum = 0
        for(let j=i;j<arr.length;j++){
            currSum+=arr[j]
            if(currSum>maxSum){
                maxSum=currSum
                startIndex=i
                endIndex=j
            }
        }
    }
    return `[${arr.slice(startIndex,endIndex+1)}], ${maxSum}`
}

/*
    1) Initialize `maxSum` to `-Infinity` for handling cases with all negative elements.
    2) Use `sum` to track the current subarray sum.
    3) Maintain indices:
       - `start` tracks the potential starting index of the subarray.
       - `ansStart` and `ansEnd` store the starting and ending indices of the maximum sum subarray found so far.
    4) Iterate through the array:
       - Add the current element to `sum`.
       - If `sum > maxSum`, update `maxSum`, `ansStart`, and `ansEnd`.
       - If `sum < 0`, reset `sum` to 0 and update `start` to the next index.
    5) Return the subarray and its sum as a formatted string.
*/

function findMaximumSubArrSum_optimal(arr){
    let maxSum = -Infinity
    let sum =0
    let start = 0
    let ansStart = -1, ansEnd = -1
    for(let i=0;i<arr.length;i++){
        if(sum==0) start=i
        sum+=arr[i]
        if(sum>maxSum){
            maxSum=sum
            ansStart=start
            ansEnd=i
        }
        if(sum<0) sum=0
    }
    return `[${arr.slice(ansStart,ansEnd+1)}], ${maxSum}`
}

console.log(findMaximumSubArrSum_bruteForce(array))
console.log(findMaximumSubArrSum_twoLoop(array))
console.log(findMaximumSubArrSum_optimal(array))