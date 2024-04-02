const arr = [1,5,3,1,2,8]
let res = 0;
for(let i = 0; i < arr.length - 1;i++){
    let curren = arr[i]
    console.log(curren,arr[i+1]);
    if(curren < arr[i + 1]){
        res += arr[i+1] - curren;
    }else{
        continue;
    }

}
console.log(res);

var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 1; i < prices.length;i++){
        if(prices[i] > prices[i-1])
            profit += prices[i] - prices[i-1];
    }
    return profit;
};