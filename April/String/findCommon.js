/*
Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
*/
console.log("Sandeep".includes('e'));
console.log("sand");
const  words = ["cool","lock","cook"]

let w = words[0];
const ans = [];
for(let i = 0; i < w.length;i++){
    let push = false;
    for(let j = 1; j < words.length;j++){
        console.log(words[j],w[i]);
        if(words[j].includes(w[i])){
            push = true
        }else{
            push = false
        }
    }
    if(push){
        ans.push(w[i])
    }
}
console.log(ans);

