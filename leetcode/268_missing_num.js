const arr = [0,1,2,3,4,6,7,8,9]

function missingNumber(nums) {
    const n = nums.length
    const sum1 = (n*(n+1))/2
    let sum2 = 0
    for(let i=0;i<n;i++){
        sum2 += nums[i]
    }
    return sum1-sum2
};

console.log(missingNumber(arr))