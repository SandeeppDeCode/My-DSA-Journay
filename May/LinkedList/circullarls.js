class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the front of the list
    insertFront(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            newNode.next = newNode;
            newNode.prev = newNode;
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
    }

    // Insert at the end of the list
    insertEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            newNode.next = newNode;
            newNode.prev = newNode;
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
        }
    }

    // Delete the front node of the list
    deleteFront() {
        if (this.head === null) {
            return; // List is empty
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
    }

    // Delete the last node of the list
    deleteEnd() {
        if (this.tail === null) {
            return; // List is empty
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
    }

    // Helper function to print the list (for debugging purposes)
    printList() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        do {
            process.stdout.write(current.data + " ");
            current = current.next;
        } while (current !== this.head);
        console.log();
    }
}

// Usage example
const list = new CircularDoublyLinkedList();
list.insertFront(3);
list.insertFront(2);
list.insertFront(1);
list.insertEnd(4);
list.insertEnd(5);
console.log("Initial list:");
list.printList();

list.deleteFront();
console.log("After deleting front node:");
list.printList();

list.deleteEnd();
console.log("After deleting end node:");
list.printList();
