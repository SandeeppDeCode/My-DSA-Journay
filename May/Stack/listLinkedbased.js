class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null; // Points to the top element of the stack
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        console.log("Previous Top:",this.top);
        newNode.next = this.top;
        this.top = newNode;
        console.log("New Top:",this.top);
        this.size++;
    }

    pop() {
        if (this.top === null) {
            console.log("Stack is empty");
            return null;
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    peek() {
        if (this.top === null) {
            console.log("Stack is empty");
            return null;
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    printStack() {
        let current = this.top;
        let ans = [];
        while(current){
            ans.push(current.value);
            current = current.next;
        }

        return {Stack:ans,Top:this.top.value,size:this.size};
    }
}
const s = new LinkedListStack();
s.push(78)
s.push(38)
s.pop();
s.pop();
console.log(s);
// console.log(s.top.next); 
console.log(s.printStack());
