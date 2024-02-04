
var restoreString = function(s) {
    const arr = s.split(" ") //O(N)
    const ans = []; O(N)
    // ans[0] = ""
    for(let i = 0; i < arr.length; i++){
        ans[(arr[i].charAt(arr[i].length-1) - 1)] = arr[i].slice(0,arr[i].length-1) //O(N)
        
    }

    return ans.join(" ") //O(N
};


var sortSentence2 = function(s) {
    const arr = s.split(' ');
    const ans = [];

    for (let i = 0; i < arr.length; i++) {
        const position = arr[i][arr[i].length - 1] - 1;
        ans[position] = arr[i].slice(0, -1);
    }

    return ans.join(' ');
};

console.log(restoreString("Myself2 Me1 I4 and3"));
