const nums = [-4,-1,0,3,10]

function sortedSquares(nums) {
    let n = nums.length;
    let left = 0, right = n - 1;
    let result = new Array(n);
    let index = n - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }

    return result;
    
};

console.log(sortedSquares(nums))