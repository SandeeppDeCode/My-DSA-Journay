var mostFrequentEven = function(nums) {
    let hash = {};
    for(let element of nums) {
        if(element % 2 === 0) {
            if(hash[element]) {
                hash[element]++;
            } else {
                hash[element] = 1;
            }
        }
    }
    let max = Math.max(...Object.values(hash));
    let keysWithMaxCount = Object.keys(hash).filter(key => hash[key] === max);
    let minKey = Math.min(...keysWithMaxCount);

    return max > 0 ? Number(minKey) : -1;
};


// time Compleixty : O(N)

// a little bit optmised

var mostFrequentEven = function(nums) {
    let hash = {};
    let maxCount = 0;
    let minKey = Infinity;

    for(let element of nums) {
        if(element % 2 === 0) {
            hash[element] = (hash[element] || 0) + 1;
            if(hash[element] > maxCount || (hash[element] === maxCount && element < minKey)) {
                maxCount = hash[element];
                minKey = element;
            }
        }
    }

    return maxCount > 0 ? minKey : -1;
};
