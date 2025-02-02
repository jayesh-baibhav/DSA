const arr = [3,4,5,1,2]

function checkIfSortedAndRotated(nums) {
    let breakPoint=-1
    let breakPoint_count = 0

    for(let i=1;i<nums.length;i++){
        if(nums[i-1]>nums[i]){
            if(breakPoint_count==0){
                breakPoint = i
                breakPoint_count++
            }else return false
        }
    }

    if(breakPoint==-1) return true
    
    for(let j=breakPoint;j<nums.length-1;j++){
        if(nums[j]>nums[j+1]) return false
    }
    
    return nums[nums.length-1]<=nums[0]
};

console.log(checkIfSortedAndRotated(arr))