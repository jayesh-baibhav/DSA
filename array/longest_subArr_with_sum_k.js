//  Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

const array = [2,3,5,1,9]
const sum = 10

/*
    1) Initialize `maxLen` to store the length of the longest subarray found.
    2) Use a nested loop to traverse all possible subarrays:
        - The outer loop (index `i`) marks the start of the subarray.
        - The middle loop (index `j`) marks the end of the subarray.
        - The inner loop (index `k`) calculates the sum of elements between `i` and `j`.
    3) If the sum of the subarray equals the target `sum`, update `maxLen` to the maximum of its current value and the length of the subarray.
    4) Return `maxLen` after checking all subarrays.
*/

function longestSubArray_bruteForce(arr,sum){
    let maxLen = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let currSum = 0
            for(let k=i;k<=j;k++){
                currSum += arr[k]
            }
            if(currSum==sum){
                maxLen = Math.max(maxLen,j-i+1)
            }
        }
    }
    return maxLen
}

/*
    1) Initialize `maxLen` to store the length of the longest subarray found.
    2) Use an outer loop (index `i`) to set the starting point of the subarray.
    3) Initialize `currSum` to `0` for each new starting point.
    4) Use an inner loop (index `j`) to extend the subarray and update `currSum` by adding `arr[j]`.
    5) If `currSum` equals the target `sum`, update `maxLen` to the maximum of its current value and the length of the subarray (`j - i + 1`).
    6) Return `maxLen` after checking all subarrays.
*/

function longestSubArray_twoLoops(arr,sum){
    let maxLen = 0
    for(let i=0;i<arr.length;i++){
        let currSum = 0
        for(let j=i;j<arr.length;j++){
            currSum += arr[j]

            if(currSum==sum){
                maxLen = Math.max(maxLen,j-i+1)
            }
        }
    }
    return maxLen
}

/*
    1) Initialize `prefixSum` as an empty `Map` to store cumulative sums and their indices.
    2) Initialize `currSum` to track the running sum of elements.
    3) Initialize `maxLen` to store the length of the longest subarray found.
    4) Traverse the array:
       - Add the current element `arr[i]` to `currSum`.
       - If `currSum` equals `sum`, update `maxLen` to `i + 1` since the subarray starts at index `0`.
       - Calculate `rem` as the difference between `sum` and `currSum`.
       - If `rem` is found in `prefixSum`, calculate the length of the subarray and update `maxLen`.
       - If `currSum` is not in `prefixSum`, store it along with the current index for future reference.
    5) Return `maxLen` after processing all elements.
*/

function longestSubArray_prefixSum(arr,sum){
    let prefixSum = new Map()
    let currSum = 0
    let maxLen = 0

    for(let i=0;i<arr.length;i++){
        currSum += arr[i]

        if(currSum==sum){
            maxLen = Math.max(maxLen,i+1)
        }

        let rem = sum-currSum

        if(prefixSum.has(rem)){
            let len = i - prefixSum.get(rem)
            maxLen = Math.max(maxLen,len)
        }
        if(!prefixSum.has(currSum)){
            prefixSum.set(currSum,i)
        }
    }
    return maxLen
}

/*
    1) Initialize pointers `left` and `right` for the window boundaries and set `currSum` to track the sum of elements in the current window.
    2) Traverse the array using the `right` pointer:
       - Adjust the window by moving `left` while `currSum > sum` to shrink the window.
       - If `currSum == sum`, update `maxLen` with the length of the current window (`right - left + 1`).
       - Move `right` to expand the window and update `currSum` if within bounds.
    3) Return `maxLen` after processing all elements.
*/

function longestSubArray_slidingWindow(arr,sum){
    let right = 0
    let left = 0
    let currSum = arr[0]
    let maxLen = 0

    while(right<arr.length){
        while(left<=right && currSum>sum){
            currSum -= arr[left]
            left++
        }

        if(currSum==sum){
            maxLen = Math.max(maxLen,right-left+1)
        }

        right++
        if(right<arr.length){
            currSum+=arr[right]
        }
    }
    return maxLen
}

console.log(longestSubArray_bruteForce(array,sum))
console.log(longestSubArray_twoLoops(array,sum))
console.log(longestSubArray_prefixSum(array,sum))
console.log(longestSubArray_slidingWindow(array,sum))