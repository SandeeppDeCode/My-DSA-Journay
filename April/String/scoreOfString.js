/*
ASCII 
A - Z = 65 + 90
a - Z = 97 - 122
*/

function scoreOFString(s){
    let score = 0;
    for(let i = 0; i < s.length - 1; i++){
        
        score += Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1));
    }
    return score;
}
console.log(scoreOFString('hello'));
console.log('Sandeep'.charCodeAt(0));
console.log(String.fromCharCode(65,66,67,68));