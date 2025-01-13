//  Problem Statement: Given an array [Postives and Negatives] and a sum k, we need to print the length of the longest subarray that sums to k.

const array = [1,-1,1]
const sum = 1

/*
    1) Initialize `maxLen` to track the maximum subarray length.
    2) Use three nested loops:
       - Outer loop (`i`) marks the start of the subarray.
       - Middle loop (`j`) marks the end of the subarray.
       - Inner loop (`k`) calculates the sum of the subarray from index `i` to `j`.
    3) If `currSum == sum`, update `maxLen` with the length of the subarray.
    4) Return `maxLen` after processing all possible subarrays.
*/

function longestSubArrWithNegatives_bruteForce(arr,sum){
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
    1) Initialize `maxLen` to track the maximum length of subarrays that meet the sum condition.
    2) Use two loops:
       - Outer loop (`i`) iterates over all possible starting indices of subarrays.
       - Inner loop (`j`) iterates from the current starting index (`i`) to the end of the array, summing elements.
    3) For each subarray from `i` to `j`, check if the sum equals `sum`.
    4) If a valid subarray is found (i.e., `currSum == sum`), update `maxLen` with the length of the subarray (`j - i + 1`).
    5) Return `maxLen` after processing all subarrays.
*/

function longestSubArrWithNegatives_twoLoops(arr,sum){
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
    1) Initialize `prefixSum` as a Map to store the cumulative sums encountered so far and their corresponding indices.
    2) Initialize `currSum` to track the running sum as you iterate through the array.
    3) Initialize `maxLen` to track the maximum length of subarrays that meet the sum condition.
    4) Traverse the array:
       - For each element, update `currSum` by adding the current element.
       - If `currSum == sum`, update `maxLen` with the length of the subarray (i.e., `i + 1`).
       - Calculate the remainder (`rem = sum - currSum`). If `rem` exists in `prefixSum`, it means a subarray with sum equal to `sum` exists from the stored index to the current index.
       - Update `maxLen` with the length of this subarray.
       - If `currSum` has not been encountered before, store it in `prefixSum` with its corresponding index.
    5) Return `maxLen` after processing all elements in the array.
*/

function longestSubArrWithNegatives_prefixSum(arr,sum){
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

console.log(longestSubArrWithNegatives_bruteForce(array,sum))
console.log(longestSubArrWithNegatives_twoLoops(array,sum))
console.log(longestSubArrWithNegatives_prefixSum(array,sum))