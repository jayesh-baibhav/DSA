/*
    Problem Statement: Given an array of integers arr[] and an integer target.
    1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
    2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
*/

const array = [2,6,5,8,11]
const target = 10

/*
    1) Use two nested loops:
       - Outer loop (`i`) starts at the beginning of the array.
       - Inner loop (`j`) starts from `i + 1` to avoid duplicate checks and ensure distinct pairs.
    2) Check if the sum of `arr[i] + arr[j]` equals the target.
    3) If a matching pair is found, return the string `Yes` along with the indices `[i, j]`.
    4) If no pair is found after all iterations, return `No [-1, -1]`.
*/

function twoSum_bruteForce(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])==target){
                return `Yes [${i},${j}]`
            }
        }
    }
    return `No [-1,-1]`
}

/*
    1) Initialize an empty Map (`map`) to store elements and their indices.
    2) Traverse the array (`arr`):
       - Compute `moreNeeded` as `target - arr[i]`.
       - Check if `moreNeeded` already exists in the map:
         - If found, return the result as `Yes [map.get(moreNeeded), i]`.
       - Otherwise, store the current element and its index in the map using `map.set(arr[i], i)`.
    3) If no pair is found, return `No [-1, -1]`.
*/

function twoSum_hashing(arr,target){
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        let moreNeeded = target-arr[i]
        if(map.has(moreNeeded)){
            return `Yes [${map.get(moreNeeded)},${i}]`
        }
        map.set(arr[i],i)
    }
    return `No [-1,-1]`
}

/*
    1) Initialize two pointers:
       - `left` pointing to the beginning of the array.
       - `right` pointing to the end of the array.
    2) Traverse the array while `left < right`:
       - Calculate `sum = arr[left] + arr[right]`.
       - If `sum == target`, return the indices `[left, right]`.
       - If `sum < target`, increment `left` to increase the sum.
       - If `sum > target`, decrement `right` to decrease the sum.
    3) If no pair is found, return `No [-1, -1]`.

    Key Considerations:
        - The input array **must be sorted** for this approach to work.
*/

function twoSum_optimal(arr,target){
    let left=0
    let right=arr.length-1
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum==target){
            return `Yes [${left},${right}]`
        }else if(sum<target){
            left++
        }else{
            right--
        }
    }
    return `No [-1,-1]`
}



console.log(twoSum_bruteForce(array,target))
console.log(twoSum_hashing(array,target))
console.log(twoSum_optimal(array,target))