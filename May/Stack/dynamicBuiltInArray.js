class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
        this.size = 0;   // Variable to keep track of the size of the stack
    }

    // Method to add an element to the stack
    push(value) {
        this.items.push(value);
        this.size++;
        return this.size; // Return the new size of the stack
    }

    // Method to remove and return the top element from the stack
    pop() {
        if (this.size === 0) {
            console.log("Stack is empty");
            return null; // Return null if the stack is empty
        }
        let popped = this.items.pop();
        this.size--;
        return popped; // Return the popped element
    }

    // Method to return the top element without removing it
    peek() {
        if (this.size === 0) {
            console.log("Stack is empty");
            return null; // Return null if the stack is empty
        }
        return this.items[this.size - 1]; // Return the top element
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Method to get the current size of the stack
    getSize() {
        return this.size;
    }

    // Method to clear the stack
    clear() {
        this.items = [];
        this.size = 0;
    }

    // Method to print the stack in visual form
    printStack() {
        for(let i = this.size-1;i >= 0; i--){
            console.log(`\t ${this.items[i]}`);

        }
    }
}

// Example usage
const s = new Stack();
s.push(8);
s.push(5);
s.push(2);
s.push(22)
s.push(284)
// s.printStack(); // Should print the stack in visual form

s.printStack(); // Should print the stack in visual form after popping
console.log(s.isEmpty());
