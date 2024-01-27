//["abc","bcd","aaaa","cbc"], x = "a"  => [0 2]


var findWordsContaining = function(words, x) {
    const ans = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            ans.push(i)
        }
    }
    return ans;
};
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],'a'));

//Time is O(N) for loop and O(Length of word) for inludesmethod

const  test = (words,x) => {
    const ans = [];
    let wordIndex = '';
    for(let i = 0; i < words.length; i++){
        wordIndex = words[i];
        for(let j = 0; j < wordIndex.length; j++){
            if(wordIndex[j] === x){
                ans.push(i);
                break;
            }
        }
    }
    return ans;
}
console.log(test(["abc","bcd","aaaa","cbc"],'a'));

