class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
        this.top = -1;   // Points to the top element of the stack
        this.size = 0;   // Tracks the number of elements in the stack
    }

    // Method to add an element to the stack
    push(value) {
        this.items[++this.top] = value;
        this.size++;
    }

    // Method to remove and return the top element from the stack
    pop() {
        if (this.size === 0) {
            console.log("Stack is empty");
            return null;
        }
        let poppedValue = this.items[this.top--];
        this.size--;
        return poppedValue;
    }

    // Method to return the top element without removing it
    peek() {
        if (this.size === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.top];
    }

    // Method to return the first (bottom) element without removing it
    first() {
        if (this.size === 0) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[0];
    }

    // Method to print the stack
    print() {
        console.log("Stack items:");
        for (let i = this.top; i >= 0; i--) {
            console.log(`\t${this.items[i]}`);
        }
    }
}

// Example usage
const s = new Stack();
s.push(4);
s.push(49);

console.log(s); // Should print the stack with 4 and 49
console.log(s.pop()); // Should print 49
console.log(s); // Should print the stack with only 4
s.push(38);
console.log(s); // Should print the stack with 4 and 38
console.log(s.peek()); // Should print 38
console.log(s); // Should print the stack with 4 and 38
s.print(); // Should visually print the stack items
