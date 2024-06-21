// Queue make LinearArrayQueue

class LinearArrayQueue {
    constructor(size) {
        this.items = new Array(size); // Initialize an array of given size
        this.front = -1; // Points to the front of the queue
        this.rear = -1; // Points to the rear of the queue
        this.size = size; // Max size of the queue
    }

    enqueue(value) {
        // Check if the queue is full
        if (this.rear === this.size - 1) {
            console.log("Queue is full");
            return;
        }

        // If the queue is empty, initialize front and rear pointers
        if (this.front === -1 && this.rear === -1) {
            this.front = 0;
            this.rear = 0;
        } else {
            // Otherwise, increment the rear pointer to add the new element
            this.rear++;
        }

        this.items[this.rear] = value; // Add the new element to the queue
    }

    dequeue() {
        // Check if the queue is empty
        if (this.front === -1 && this.rear === -1) {
            console.log("Queue is empty");
            return;
        }

        let unwanted = this.items[this.front]; // Get the front element
        this.items[this.front] = undefined; // Optionally clear the slot (not necessary in most cases)

        // If the queue has only one element, reset front and rear pointers
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            // Otherwise, increment the front pointer to remove the front element
            this.front++;
        }

        return unwanted; // Return the dequeued element
    }

    print() {
        return this.items; // Return the current state of the queue
    }
    
    peek(){
        return this.items[this.front]
    }

}

// Example usage
const q = new LinearArrayQueue(5);
q.enqueue(6);
q.enqueue(37);
q.enqueue(29);
q.enqueue(49);
q.enqueue(89);
q.enqueue(19)
q.enqueue(19)
console.log(q.dequeue()); // Should print 6
console.log(q.dequeue()); // Should print 37
console.log(q.print());   // Should print [ undefined, undefined, 29, undefined, undefined ]
console.log(q.peek());
