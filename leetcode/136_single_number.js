const arr = [4,1,2,1,2]

function singleNumber(nums) {
    let xor = 0
    for(let num of nums){
        xor = xor^num
    }
    return xor
};

console.log(singleNumber(arr))