//  Problem Statement: Given a non-empty array of integers arr,
//  every element appears twice except for one. Find that single one.

const array = [4,1,2,1,2]

/*
    1) Iterate over each element of the array with index `i`.
    2) Initialize a variable `count` to store the number of times the current element (`arr[i]`) appears in the array.
    3) Use an inner loop to iterate over the entire array and increment `count` when a match with `arr[i]` is found.
    4) Check if `count` is equal to `1` (indicating the element appears only once).
       - If true, return `arr[i]`.
    5) If no element is found after iterating through the array, the function implicitly returns -1.
*/

function findNumAppearingOnes_bruteForce(arr){
    for(let i=0;i<arr.length;i++){
        let count = 0
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++
            }
        }
        if(count==1){
            return arr[i]
        }
    }
    return -1
}

/*
    1) Find the maximum element in the array (`maxi`) using a loop.
       - This determines the size of the hash table needed for frequency counting.
    2) Create a hash table (`hash`) initialized to zeros with a length of `maxi + 1`.
    3) Traverse the array and increment the frequency count for each element in the hash table.
    4) Iterate through the array again to check for elements with a frequency of `1`.
       - If found, return that element.
    5) If no unique element is found, return `-1`.
*/

function findNumAppearingOnes_A(arr){
    let maxi = arr[0]
    for(let i=0;i<arr.length;i++){
        maxi = Math.max(maxi,arr[i])
    }

    let hash = new Array(maxi+1).fill(0)

    for(let i=0;i<arr.length;i++){
        hash[arr[i]]++
    }

    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]==1){
            return arr[i]
        }
    }
    return -1
}
/*
    1) Create an empty `Map` (`freq`) to store the frequency count of each element.
    2) Traverse each element in the array using a `for...of` loop:
       - Update the frequency count for each element by setting it in the `Map`.
       - If the element is already present, increment its count.
    3) Iterate over the entries in the `Map`:
       - If an element's count is `1`, return that element as it appears only once.
    4) If no unique element is found, return `-1`.
*/

function findNumAppearingOnes_B(arr){
    let freq = new Map()

    for(let num of arr){
        freq.set(num, (freq.get(num) || 0)+1)
    }

    for(let [num,count] of freq){
        if(count==1){
            return num
        }
    }
    return -1
}

/*
    1) Initialize a variable `XOR` to `0`.
    2) Traverse each element in the array:
       - Perform the XOR operation between `XOR` and the current element (`num`).
       - The XOR operation cancels out numbers that appear in pairs.
    3) After the loop, `XOR` will hold the unique element that appears only once.
    4) Return the value of `XOR`.

    - XOR properties leveraged:
        - `a ^ a = 0` (any number XORed with itself is zero).
        - `a ^ 0 = a` (any number XORed with zero remains unchanged).
*/

function findNumAppearingOnes_optimal(arr){
    let XOR = 0
    
    for(let num of arr){
        XOR = num^XOR
    }
    return XOR
}



console.log(findNumAppearingOnes_bruteForce(array))
console.log(findNumAppearingOnes_A(array))
console.log(findNumAppearingOnes_B(array))
console.log(findNumAppearingOnes_optimal(array))