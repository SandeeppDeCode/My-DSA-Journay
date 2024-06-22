class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push(value){
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop(){
        if(this.top === null){

            console.log("Stack is empty");
            return null;
        }
        let unwanted = this.top.value;
        this.top = this.top.next;
        this.size--;
        return unwanted;
    }
    peek(){
        return this.top.value;
    }
    print(){
        let current = this.top;
        let ans = [];
        while(current !== null){
            ans.push(current.data)
            current = current.next;
        }
        return {Stack:ans,Top:this.top.data,Size:this.size}
    }
}
const s = new Stack();

s.push(56);
s.push(37);
s.push(89)
s.push(738)
s.pop();
s.pop();
s.pop();
s.pop();
console.log(s);
console.log(s.print());


