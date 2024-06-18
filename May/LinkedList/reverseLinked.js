class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
        this.size = 0;
    }
    push(value) {
        this.items[++this.top] = value;
        this.size++;
    }
    pop() {  
        if (this.isEmpty()) {
            return null;
        }
        this.size--;
        return this.items[this.top--];
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.top];
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function ConvertArrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }
    const newNode = new Node(arr[0]);
    let head = newNode;
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        current.next = newNode;
        current = newNode;
    }
    return head;
}

function reverseALinkedList(head) {
    if (!head) {
        return null;
    }
    let current = head;
    const s = new Stack();
    while (current !== null) {
        s.push(current.data);
        current = current.next;
    }
    current = head;
    while (!s.isEmpty()) {
        current.data = s.pop();
        current = current.next;
    }
    return head;
}

// Test the implementation
const head = ConvertArrayToLinkedList([1, 2, 3]);
// console.log(head);
// console.log(reverseALinkedList(head));



//Reverse using pointer;
/*
    node1(prev)  node2(temp) node 3(front)
    front = temp.next
    temp.next = prev
    temp = front;
*/

function reverseLs(head){
    let prev = null;
    let current = head;
    while(current !== null){
        let front = current.next;
        current.next = prev;
        prev  = current;
        current = front;
    }
    // head = prev;
    return {head:head,current:current,prev:prev};
}
console.log(head);
console.log(reverseLs(head));