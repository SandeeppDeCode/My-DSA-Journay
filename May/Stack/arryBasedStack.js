class Stack{
    constructor(){
        this.items = [];
        this.top = -1;
        this.bottom = -1;
        this.size = 0;
    }
    push(value){
        if(this.size == 0){
            this.top++;
            this.bottom++;
            this.items[this.top] = value
        }else{
            this.top++;
            this.items[this.top] = value;
            
        }
        this.size++;
    }
    pop(){
        //emptyy
        if(this.top === -1){
            console.log("Stack is Empty");
            return null;
        }
        //single elemnt
        if(this.top === 0){
            let unwanted = this.items[this.top];
            delete this.items[this.top];
            this.top = -1;
            this.bottom = -1;
            this.size--;
            return unwanted

        }else{
            //other
            let unwanted = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            this.size--;
            return unwanted;
        }
    }

    peek(){
        return this.items[this.top];
    }
    first(){
        return this.items[this.bottom];
    }
    print(){
        console.log("Stack item : ");
        for(let i = this.top; i >= 0; i--){
            console.log(`\t${this.items[i]}`);
        }
    }
}
const s = new Stack();
s.push(4)
s.push(49)

console.log(s);
console.log(s.pop());
console.log(s);
s.push(38);
console.log(s);
console.log(s.peek());
console.log(s);
s.print();