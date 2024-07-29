function genarate(n) {

    const result = [];
    function helper(index=0,current=[]){
        if(index >= n){
            result.push([...current]);
            return;

        }

        current.push(0);
        helper(index+1,current);//take 0 
        current.pop();

        current.push(1);
        helper(index+1,current); //nottake 0
        current.pop()
    }
    helper();
    return result;
}
console.log(genarate(24));