const array = [12, 45, 78, 12, 67, 89, 45, 56, 78, 67]

/*
    To find the largest element in the array:
    1) Initialize a variable 'res' with '-Infinity'.
    2) Iterate through the array and compare each element with 'res'. 
       If the current element is greater than 'res', update 'res' with that element.
    3) Return 'res' as the largest element.
*/

function findLargestElement(arr){
    let res = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>res){
            res = arr[i]
        }
    }
    return res
}

console.log(findLargestElement(array))
