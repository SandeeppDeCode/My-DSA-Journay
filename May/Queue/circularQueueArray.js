//Circuarlar array queue;
class CircularQueue {

    constructor(size) {
        // Initialize queue with a fixed size and set front and rear pointers to -1 (indicating an empty queue)
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    enqueue(item) {
        // Check if the queue is full
        if ((this.rear + 1) % this.size === this.front) {
            return "Overflow"; // Queue is full
        }

        // If the queue is empty, set both front and rear to 0
        if (this.front === -1 && this.rear === -1) {
            this.front = 0;
            this.rear = 0;
        }else{
            // Move the rear pointer to the next position in a circular manner
            this.rear = (this.rear + 1) % this.size 
        }
        // Insert the item at the rear position
        this.items[this.rear] = item;
    }

    dequeue() {
        // Check if the queue is empty
        if (this.front === -1 && this.rear === -1) {
            return "Underflow"; // Queue is empty
        }

        // Remove the item at the front position
        let del = this.items[this.front];
        delete this.items[this.front];

        // If there was only one element in the queue, reset the queue to empty state
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            // Otherwise, move the front pointer to the next position in a circular manner
            this.front = (this.front + 1) % this.size;
        }

        // Return the deleted item
        return del;
    }

    print() {
        // Print the current state of the queue
        console.log(this.items);
    }
    
    peek(){
        return this.items[this.front]
    }
}

// Create a new circular queue of size 5
let q = new CircularQueue(5);

// Enqueue elements into the queue
q.enqueue(5);
q.enqueue(7);
q.enqueue(11);
q.enqueue(44);
q.enqueue(20);

// Attempt to enqueue more elements (this will indicate overflow)
q.enqueue(20);
q.enqueue(20);

// Print the queue state after enqueuing elements
console.log(q);

// Dequeue an element from the queue
q.dequeue();

// Print the queue state after dequeuing an element
console.log(q);
