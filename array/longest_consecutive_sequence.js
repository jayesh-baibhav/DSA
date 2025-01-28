/*
    Problem Statement: 
        You are given an array of ‘N’ integers. 
        You need to find the length of the longest sequence which contains the 
        consecutive elements.
*/

const array = [100, 200, 1, 2, 3, 4]

/*
        Process:
        1) Handle edge case:
           - If the array is empty, return 0.

        2) Use a Set to store unique elements:
           - Create a Set to store all unique elements from the array.
           - This allows O(1) lookup for checking the presence of an element.

        3) Iterate through the Set:
           - For each element in the Set, check if it is the start of a sequence.
           - A number is the start of a sequence if `(num - 1)` is not present in the Set.

        4) Count the length of the sequence:
           - If an element is the start of a sequence, count the consecutive numbers by checking if `(num + 1)` exists in the Set.
           - Use a `while` loop to count all elements in the sequence.

        5) Update the longest length:
           - After counting the sequence, update the `longest` variable if the current sequence is longer.

        6) Return the longest sequence length.
*/

function longestSuccessiveElements(arr) {
    if (arr.length === 0)
        return 0;

    let longest = 1;
    let st = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        st.add(arr[i]);
    }

    for (let it of st) {
        if (!st.has(it - 1)) {
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

console.log(longestSuccessiveElements(array));
