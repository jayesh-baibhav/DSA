const nums = [3,2,2,3]
const val = 3

var removeElement = function(nums, val) {
    let i = 0
    for(let j=0;j<nums.length;j++){
        if(nums[j]!==val){
            nums[i]=nums[j]
            i++
        }
    }
    return i
};

const newLength = removeElement(nums, val);
console.log(nums.slice(0, newLength))
