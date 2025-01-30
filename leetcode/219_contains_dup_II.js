const nums = [1,2,3,1,2,3]
const k = 2

function containsNearbyDuplicate(nums, k) {
    let numMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i]) && i - numMap.get(nums[i]) <= k) {
            return true
        }
        numMap.set(nums[i], i)
    }
    return false;
}

console.log(containsNearbyDuplicate(nums,k))