/*
    Problem Statement: 
        Given an array Arr[] of integers, rearrange the numbers of the given array into the l
        exicographically next greater permutation of numbers.

        If such an arrangement is not possible,
        it must rearrange to the lowest possible order 
        (i.e., sorted in ascending order).
*/

const array = [2, 1, 5, 4, 3, 0, 0]

/*
    Process:
    1) Traverse the array from right to left to find the first "breakpoint" index `ind` 
        where arr[ind] < arr[ind + 1]. This identifies the element that can be swapped to 
        create the next permutation. If no such index exists (ind == -1), the array is 
        already the largest permutation. In this case, reverse the array to get the smallest permutation.

    2) If a breakpoint is found, traverse the array from the right to find the smallest 
        element larger than arr[ind] and swap them. This ensures that we move to the 
        next lexicographical permutation.

    3) Reverse the subarray to the right of the breakpoint (arr[ind + 1:]):
        - The subarray is initially in descending order.
        - Reversing it places it in ascending order, which is the smallest possible 
            arrangement for that section and ensures the next permutation is generated.

    4) Return the modified array, which represents the next greater permutation.
*/

function nextGreaterPermutation(arr) {
    let n = arr.length;

    let ind = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            ind = i;
            break;
        }
    }

    if (ind == -1) {
        arr.reverse();
        return arr;
    }

    for (let i = n - 1; i > ind; i--) {
        if (arr[i] > arr[ind]) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]];
            break;
        }
    }

    arr.splice(ind + 1, n - ind - 1, ...arr.slice(ind + 1).reverse());

    return arr;
}

console.log(nextGreaterPermutation(array))

