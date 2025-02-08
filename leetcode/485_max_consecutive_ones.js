const arr = [1,1,0,1,1,1]

function findMaxConsecutiveOnes(nums) {
    let count = 0
    let curr_max = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++
        }else{
            count = 0
        }
        curr_max = Math.max(curr_max,count)
    }
    return curr_max
};

console.log(findMaxConsecutiveOnes(arr))
