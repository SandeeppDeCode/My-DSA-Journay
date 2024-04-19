function findFrequency(str){
    const hash = {};
    for(let ch of str){
        if(hash[ch]){
            hash[ch]++;
        }else{
            hash[ch] = 1;
        }
    }
    return hash
}

function findTheDifference(hash){
    const values = Object.values(hash)
    let max = Math.max(...values);
    let min = Math.min(...values);
    return max - min;
}

function findSubString(str){
    const ans = [];
    for(let i = 0; i < str.length;i++){
        let subStr = "";
        for(let j = i; j < str.length;j++){
            subStr += str[j]
            ans.push(subStr);
        }
    }
    return ans;
}

function beautyString(str){
    let subString = findSubString(str)
    subString = subString.filter(item => item.length > 2);
    let sum = 0;
    for(let i = 0 ; i < subString.length; i++){
        sum += findTheDifference(findFrequency(subString[i]))
    }
    return sum;
}

console.log(beautyString("aabcb"));
