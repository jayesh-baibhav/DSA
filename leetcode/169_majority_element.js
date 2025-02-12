const arr = [2,2,1,1,1,2,2]

function majorityElement(nums) {
    let count = 0
    let curr_element
    for(let i=0;i<nums.length;i++){
        if(count==0) curr_element = nums[i] 
        if(curr_element == nums[i]) count++
        if(curr_element !== nums[i]) count--
    }
    return curr_element  
};

console.log(majorityElement(arr))
