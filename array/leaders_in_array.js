/*
    Problem Statement: Given an array, print all the elements which are leaders.
    A Leader is an element that is greater than all of the elements on its right side in the array.
*/

const array = [10, 22, 12, 3, 0, 6]

/*
    Process:
    1) Initialize an empty array `ans` to store the leaders.
    2) Loop through each element of the array:
       - Assume the current element is a leader (`leader = true`).
       - Compare the current element with all elements to its right.
       - If a larger element is found, mark it as not a leader (`leader = false`) and break the inner loop.
    3) If the element is still marked as a leader, add it to the `ans` array.
    4) Return the `ans` array after processing all elements.
*/

function leadersOfArray_bruteForce(arr){
    let ans = []
    for(let i=0;i<arr.length;i++){
        let leader =  true

        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[i]){
                leader = false
                break
            }
        }

        if(leader){
            ans.push(arr[i])
        }
    }
    return ans
}

/*
    Process:
    1) Initialize an empty array `ans` to store the leaders.
    2) Start with the last element of the array, which is always a leader.
       - Set `max` to the last element and push it to `ans`.
    3) Traverse the array from right to left:
       - If the current element is greater than `max`, it is a leader.
       - Add the current element to `ans` and update `max` to this element.
    4) Since leaders are collected in reverse order, reverse the `ans` array to preserve the original order of appearance.
    5) Return the `ans` array.
*/

function leadersOfArray_optimal(arr){
    let ans=[]

    let max = arr[arr.length-1]
    ans.push(arr[arr.length-1])

    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]>max){
            ans.push(arr[i])
            max = arr[i]
        }
    }

    return ans.reverse()
}

console.log(leadersOfArray_bruteForce(array))
console.log(leadersOfArray_optimal(array))