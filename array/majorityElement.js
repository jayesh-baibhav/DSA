//  Problem Statement: Given an array of N integers,
//  write a program to return an element that occurs more than N/2 times in the given array.
//  You may consider that such an element always exists in the array.

const array = [2,2,1,1,1,2,2]

/*
    1) Iterate through each element of the array using an outer loop (`i`).
    2) Initialize a counter (`cnt`) to track occurrences of the current element.
    3) Use an inner loop (`j`) to count how many times `arr[i]` appears in the array.
    4) If the count of the current element exceeds `arr.length / 2`, return the element as the majority element.
    5) If no majority element is found, the function implicitly returns `undefined`.
*/

function findMajorityElement_bruteForce(arr){
    for(let i=0;i<arr.length;i++){
        let cnt = 0
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                cnt++
            }
        }
        if(cnt>(arr.length/2)){
            return arr[i]
        }
    }
}

/*
    1) Create a `Map` (`freqMap`) to store element frequencies.
    2) Traverse the array, updating the map with counts for each element:
       - If the element exists in the map, increment its count.
       - If it doesn't exist, add it to the map with a count of 1.
    3) Iterate through the map to check if any element's count exceeds `arr.length / 2`.
    4) If found, return the majority element.
*/

function findMajorityElement_hashMap(arr){
    let freqMap = new Map()
    for(let i=0;i<arr.length;i++){
        freqMap.set(arr[i],(freqMap.get(arr[i])||0)+1)
    }
    for(let [num,count] of freqMap){
        if(count>(arr.length)/2){
            return num
        }
    }
}

/*
    1) Initialize two variables:
       - `cnt`: A counter to track the balance between occurrences of the candidate element.
       - `ele`: The current candidate for the majority element.
    2) Traverse the array:
       - If `cnt == 0`, set `ele` to the current element and reset `cnt` to 1.
       - If the current element matches `ele`, increment `cnt`.
       - Otherwise, decrement `cnt`.
    3) After the loop, `ele` holds the potential majority element.
    4) Return `ele`. If it's required to verify that this element is a true majority, a validation step should be added.

    - If validation for a true majority is needed, iterate through the array again to confirm the count.
*/

function findMajorityElement_MooresVotingAlgo(arr){
    let cnt = 0
    let ele
    for(let i=0;i<arr.length;i++){
        if(cnt==0){
            cnt=1
            ele=arr[i]
        }else if(ele==arr[i]){
            cnt++
        }else{
            cnt--
        }
    }
    return ele
}

console.log(findMajorityElement_bruteForce(array))
console.log(findMajorityElement_hashMap(array))
console.log(findMajorityElement_MooresVotingAlgo(array))