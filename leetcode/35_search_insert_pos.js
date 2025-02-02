const arr = [1,3,5,6]
const target = 5

function searchInsert(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }
    }
    if(target>nums[nums.length-1]) return nums.length
    for(let i=0;i<nums.length;i++){
        if(nums[i]>target){
            return i
        }
    }
};

console.log(searchInsert(arr,target))