
let s = "foo";
let t = "bar";
const counter1  = new Array(26).fill(0);
const counter2 = new Array(26).fill(0);
for(let i  = 0 ; i < s.length;i++){
    counter1[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}
for(let i  = 0 ; i < t.length;i++){
    counter2[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    let sortedArr1 = arr1.slice().sort();
    let sortedArr2 = arr2.slice().sort();
    console.log(sortedArr1);
    console.log(sortedArr2);
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i])
            return false;
    }
    return true;
}

// Usage:

console.log(arraysEqual(counter1, counter2));  // Outputs: true


var isIsomorphic = function(s, t) {
    for(let i=0; i<s.length ;i++){
        console.log(s.indexOf(s[i]));
        console.log(t.indexOf(t[i]));
       if(s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true; 
    
};
console.log(isIsomorphic(s,t));



var isIsomorphic2 = function(s, t) {
    if (s.length !== t.length) return false;
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];
        if (!mapS[charS]) mapS[charS] = charT;
        if (!mapT[charT]) mapT[charT] = charS;

        if (mapS[charS] !== charT || mapT[charT] !== charS) return false;
    }
    return true;
};

console.log(isIsomorphic2(s,t));



let mp1 = {};
let mp2 = {};
let m = s.length;
for(let i = 0; i < m; i++) {
    let ch1 = s[i];
    let ch2 = t[i];
    if((mp1[ch1] !== undefined && mp1[ch1] !== ch2) || 
       (mp2[ch2] !== undefined && mp2[ch2] !== ch1)) {
        return false;
    }
    mp1[ch1] = ch2;
    mp2[ch2] = ch1;
}
return true;