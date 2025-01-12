//  Problem Statement: Given an array of N integers, left rotate the array by one place.

const array = [1,2,3,4,5]

/*
    1) Save the first element of the array in a temporary variable.  
    2) Loop through the array:  
        - For indices less than (array length - 1), set arr[i] to arr[i + 1].  
        - For the last index, set arr[i] to the value stored in the temporary variable.  
    3) Return the modified array.  
*/  

function leftRotate(arr){
    const firstElement = arr[0]
    for(let i=0;i<arr.length;i++){
        if(i!==arr.length-1){
            arr[i]=arr[i+1]
        }else{
            arr[i] = firstElement
        }
    }
    return arr
}

console.log(leftRotate(array))