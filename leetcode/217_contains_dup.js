const arr = [1,2,3,4,4,5]

function containsDuplicate(nums) {
    let set = new Set(nums)
    if(set.size==nums.length){
        return false
    }
    return true
};

console.log(containsDuplicate(arr))