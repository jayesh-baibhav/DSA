//  Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m.
//  Find the union of two sorted arrays.

const array_A = [1,2,3,4,5]
const array_B = [2,3,4,4,5]

/*
    1) Create a `Map` (`freq`) to store the frequency of each unique element.
    2) Traverse `arr1` and `arr2`, updating the frequency map for each element.
       - If the element is already in the map, increment its count.
       - If not, add it to the map with a count of 1.
    3) Iterate over the map and push the keys (unique elements) to the `union` array.
    4) Return the `union` array.
*/

function findUnionA(arrA,arrB){
    const freq = new Map()
    const union = []

    for(let num of arrA){
        freq.set(num, (freq.get(num) || 0)+1)
    }
    for(let num of arrB){
        freq.set(num, (freq.get(num) || 0)+1)
    }
    for(let [num,count] of freq){
        union.push(num)
    }
    return union
}

/*
    1) Create an empty Set (`set`) to store unique elements.
    2) Traverse each element of `arrA` and add it to the Set.
    3) Traverse each element of `arrB` and add it to the Set.
    4) Convert the Set back to an array by pushing each element to `union`.
    5) Return the array containing the union of the two arrays.
*/

function findUnionB(arrA,arrB){
    const set = new Set()
    const union = []

    for(let num of arrA){
        set.add(num)
    }
    for(let num of arrB)(
        set.add(num)
    )
    for(let num of set){
        union.push(num)
    }
    return union
}
/*
    1) Initialize pointers `i` and `j` to traverse `arrA` and `arrB`.
    2) Use a `while` loop to compare elements from both arrays:
        - If `arrA[i] <= arrB[j]`, check if `arrA[i]` is already present in the `union` array:
            - If not present, add it to the array.
            - Increment pointer `i`.
        - If `arrA[i] > arrB[j]`, check if `arrB[j]` is already present in the `union` array:
            - If not present, add it to the array.
            - Increment pointer `j`.
    3) Handle any remaining elements in `arrA` and `arrB` using additional `while` loops.
        - Add each unique element to the `union` array.
    4) Return the `union` array.

    Notes:
        - Assumes that both input arrays are sorted.
*/

function findUnionC(arrA,arrB){
    let i=0,j=0
    const union = []

    while(i<arrA.length && j<arrB.length){
        if(arrA[i]<=arrB[j]){
            if(union.length==0 || union[union.length-1]!==arrA[i]){
                union.push(arrA[i])
            }
            i++
        }else{
            if(union.length==0 || union[union.length-1]!==arrB[j]){
                union.push(arrB[j])
            }
            j++
        }
    }
    while(i<arrA.length){
        if(union[union.length-1]!==arrA[i]){
            union.push(arrA[i])
        }
        i++
    }
    while(j<arrB.length){
        if(union[union.length-1]!==arrB[j]){
            union.push(arrB[j])
        }
        j++
    }
    return union
}

console.log(findUnionA(array_A,array_B))
console.log(findUnionB(array_A,array_B))
console.log(findUnionC(array_A,array_B))