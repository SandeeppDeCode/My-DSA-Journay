var maximumWealth = function(accounts) {
    let rich = -Infinity;

    for(let i = 0; i < accounts.length;i++){
        const sum = accounts[i].reduce((acc, value)=>acc+value,0);
        rich = Math.max(rich,sum);
    }
    return rich;
};

// Time : O(M * N)
// Space : O(1)