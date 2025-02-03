const stock_price = [7,1,5,3,6,4]

function maxProfit(prices) {
    let maxPro = 0
    let minPrice = Infinity
    for(let price of prices){
        minPrice = Math.min(price,minPrice)
        maxPro = Math.max(maxPro,price-minPrice)
    }
    return maxPro
};

console.log(maxProfit(stock_price))