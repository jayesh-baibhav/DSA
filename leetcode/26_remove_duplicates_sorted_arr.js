const arr = [1,1,2,2,2,3,4,4,5]

function removeDuplicates(nums) {
    let i = 0
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++
            nums[i]=nums[j]
        }
    }
    return nums.slice(0,i+1)
};

console.log(removeDuplicates(arr))