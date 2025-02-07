const arr = [0,1,0,3,12]

function moveZeroes(nums) {
    let j
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            j = i
            break;
        }
    }

    for(let i=j+1;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[i],nums[j]] = [nums[j], nums[i]]
            j++
        }
    }

    return nums
};

console.log(moveZeroes(arr))
