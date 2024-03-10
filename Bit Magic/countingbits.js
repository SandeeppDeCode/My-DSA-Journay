for(let i = 0 ; i < 5; i++){
    let num = i;
    while(num){
        count += num & 1
        num >>= 1;
    }
    ans.push(num);
    
}

//N(logn)

var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
    for(let i = 1; i <= n; i++){
        ans[i] = ans[i & (i - 1)] + 1;
    }
    return ans;
};

// O(N