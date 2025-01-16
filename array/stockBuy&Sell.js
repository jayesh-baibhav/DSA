//  Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

const array = [7, 1, 5, 3, 6, 4]

/*
    1) Initialize `maxProfit` to 0.
    2) Use two nested loops:
       - Outer loop (`i`) selects the day to buy the stock.
       - Inner loop (`j`) selects the day to sell the stock (must be after the buy day).
    3) For each pair `(i, j)`:
       - Calculate the profit: `arr[j] - arr[i]`.
       - Update `maxProfit` if the calculated profit is greater than the current `maxProfit`.
    4) Return `maxProfit` after checking all pairs.
*/

function maxProfit_bruteForce(arr){
    let maxProfit = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[i]){
                maxProfit = Math.max(arr[j]-arr[i],maxProfit)
            }
        }
    }
    return maxProfit
}

/*
    1) Initialize `maxProfit` to 0 and `minPrice` to a very large value (`Infinity`).
    2) Iterate through each stock price in `arr`:
       - Update `minPrice` to the minimum of the current price and the existing `minPrice`.
       - Calculate the potential profit for the current price (`num - minPrice`).
       - Update `maxProfit` to the maximum of the current `maxProfit` and the calculated profit.
    3) After processing all prices, return the `maxProfit`.
*/

function maxProfit_optimal(arr){
    let maxProfit = 0
    let minPrice = Infinity
    for(let num of arr){
        minPrice = Math.min(minPrice,num)
        maxProfit = Math.max(maxProfit,num-minPrice)
    }
    return maxProfit
}

console.log(maxProfit_bruteForce(array))
console.log(maxProfit_optimal(array))