//  Problem Statement: Given an array of size n, 
//  write a program to check if the given array is sorted in ascending order or not. 
//  If the array is sorted then return True, Else return False.

const array = [12, 45, 78, 12, 67, 89, 45, 56, 78, 67]
const sorted_array = [...array].sort()

/*
    Brute Force Approach:
    1) Start by selecting the element at index 0 and compare it with each subsequent element in the array.
    2) If the current element is less than or equal to all future elements, move to the next element and repeat.
    3) If any element is found to be greater than a future element, return false immediately.
    4) If the entire array is traversed without finding such a case, return true.
*/

function isSorted_bruteForce(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){
                return false
            }
        }
    }
    return true
}


/*
    Optimal Approach:
    Intuition: In a sorted array, each element is greater than or equal to its preceding element.
    Therefore, if every element satisfies this condition with its previous element, the array is sorted.
    1) Traverse the array and check if each element is greater than or equal to its preceding element.
    2) If the entire array is successfully checked or if the array size is 0 or 1 (N = 0 or N = 1), return true.
    3) If any element violates the condition, return false.
*/

function isSorted_optimal(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}

//  Brute Force
console.log(isSorted_bruteForce(array))
console.log(isSorted_bruteForce(sorted_array))
//  Optimal
console.log(isSorted_optimal(array))
console.log(isSorted_optimal(sorted_array))