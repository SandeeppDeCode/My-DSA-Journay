//check pailmdrome 

/*
Strings in JavaScript are indeed immutable, meaning once a string is created, its characters cannot be changed.
*/

let str = "Sandeep";
str[0] = "p"; // cannot be done
console.log(str[0]  === str[str.length-1]);

function checkPalim(str,i) {
    if(i > str.length / 2){
        return true;
    }
    if(str.charAt(i) !== str.charAt(str.length-i-1))
        return false;

    return checkPalim(str,i+1);
}

console.log(checkPalim("madam",0));

function check(str) {
    function helper(str,left=0,right=str.length-1) {
        if(left >= right){
            return true;
        }
        if(str.charAt(left) !== str.charAt(right)){
            return false;
        }
        return helper(str,left+1,right-1);
    }
    return helper(str);
}
console.log(check("madam"));