class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(value) {
        this.size++;
        this.items.push(value);
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Stack is empty");
            return null;
        }
        this.size--;
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Queue {
    constructor() {
        this.input = new Stack();
        this.output = new Stack();
    }

    enqueue(value) {
        this.input.push(value);
    }

    dequeue() {
        if (this.output.isEmpty()) {
            while (!this.input.isEmpty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.pop();
    }

    peek() {
        if (this.output.isEmpty()) {
            while (!this.input.isEmpty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.peek();
    }

    isEmpty() {
        return this.input.isEmpty() && this.output.isEmpty();
    }
}

// Example usage
const q = new Queue();
q.enqueue(47);
q.enqueue(78);
q.enqueue(337);
q.enqueue(99);
console.log(q.dequeue()); // 47
console.log(q.peek());    // 78
console.log(q);           // Queue { input: Stack { items: [], size: 0 }, output: Stack { items: [ 99, 337, 78 ], size: 3 } }
