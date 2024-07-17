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
        if (this.size === 0) {
            console.log("Stack is empty");
            return null;
        }
        let poppedValue = this.items[this.top];
        // this.items[this.top] = undefined; // Remove reference to the popped element
        this.items.splice(this.top, 1); // Remove the element completely
        this.top--;
        this.size--;
        return poppedValue;
    }
    peek() {
        if (this.size === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.top];
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    enqueue(value) {
        // Move all elements from s1 to s2
        while (this.s1.size > 0) {
            this.s2.push(this.s1.pop());
        }

        // Push the new element onto s1
        this.s1.push(value);

        // Move all elements back from s2 to s1
        while (this.s2.size > 0) {
            this.s1.push(this.s2.pop());
        }
    }
    dequeue() {
        if (this.s1.size === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.s1.pop();
    }
    peek() {
        if (this.s1.size === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.s1.peek();
    }
}

// Example usage
const q = new Queue();
q.enqueue(5);
q.enqueue(48);
q.enqueue(39);
console.log(q.dequeue()); // Should print 5 and remove it from memory
console.log(q.dequeue()); // Should print 48 and remove it from memory
console.log(q.dequeue()); // Should print 39 and remove it from memory
console.log(q); // Should print an empty queue
