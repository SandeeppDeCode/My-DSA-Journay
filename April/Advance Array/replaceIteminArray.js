
let items = ['JS', 'PHP', 'RUBY'];

let replacedItem = items.splice(items.indexOf('JS'), 1, 'PYTHON')

console.log(replacedItem) //['RUBY']
console.log(items) //['JS', 'PHP', 'PYTHON']

var removeTrailingZeros = function(num) {



        for(let i = num.length-1 ; i >= 0 ; i--){
            console.log(i);
            if(num[i]  == 0){
                continue
            }else{
                return num.slice(0,i+1)
            }
        }
        // console.log(i);
    


};
console.log(removeTrailingZeros("1230"));