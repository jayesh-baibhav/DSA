const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let moreNeeded = target - num;
        if (map.has(moreNeeded)) {
            return [map.get(moreNeeded), i];
        }
        map.set(num, i);
    }
    return null;
}

console.log(twoSum(nums, target));
