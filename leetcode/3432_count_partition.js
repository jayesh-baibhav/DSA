const arr = [10,10,3,7,6]

function findSum(arr,startIndex,endIndex){
    let sum = 0
    for(let i=startIndex;i<=endIndex;i++){
        sum+=arr[i]
    }
    return sum
}

function countPartitions(nums) {
    ans = 0
    for(let i=0;i<nums.length-1;i++){
        const first_partition_sum = findSum(nums,0,i)
        const second_partition_sum = findSum(nums,i+1,nums.length-1)
        if(Math.abs(first_partition_sum-second_partition_sum)%2==0){
            ans++
        }
    }
    return ans
}

console.log(countPartitions(arr))