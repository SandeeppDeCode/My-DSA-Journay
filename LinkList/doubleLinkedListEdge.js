class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Check if the list is empty
    isEmpty() {
        return this.head === null;
    }

    // Insertion at the beginning
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) { // Edge case: empty list
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    // Insertion at the end with help of tail node
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) { // Edge case: empty list
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Insertion after a given index
    insertAfter(index, value) {
        if (index < 0 || index >= this.length) { // Edge case: index out of bounds
            console.error('Index out of bounds');
            return;
        }
        const newNode = new Node(value);
        const indexNode = this.traverse(index);
        newNode.next = indexNode.next;
        newNode.prev = indexNode;

        if (indexNode.next) {
            indexNode.next.prev = newNode;
        } else {
            this.tail = newNode; // Update tail if new node is inserted at the end
        }
        indexNode.next = newNode;
        this.length++;
    }

    // Insertion before a given index
    insertBefore(index, value) {
        if (index < 0 || index >= this.length) { // Edge case: index out of bounds
            console.error('Index out of bounds');
            return;
        }
        const newNode = new Node(value);
        const indexNode = this.traverse(index);

        newNode.next = indexNode;
        newNode.prev = indexNode.prev;

        if (indexNode.prev) {
            indexNode.prev.next = newNode;
        } else {
            this.head = newNode; // Update head if new node is inserted at the beginning
        }
        indexNode.prev = newNode;
        this.length++;
    }

    // Deletion of the first node
    deleteFirstNode() {
        if (this.isEmpty()) { // Edge case: empty list
            console.error('List is empty');
            return null;
        }
        const deletedNode = this.head;
        if (this.head === this.tail) { // Edge case: single node
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return deletedNode;
    }

    // Deletion of the last node with help of tail node
    deleteFromEnd() {
        if (this.isEmpty()) { // Edge case: empty list
            console.error('List is empty');
            return null;
        }
        const deletedNode = this.tail;
        if (this.head === this.tail) { // Edge case: single node
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return deletedNode;
    }

    // Deletion at a given index
    delete(index) {
        if (index < 0 || index >= this.length) { // Edge case: index out of bounds
            console.error('Index out of bounds');
            return null;
        }
        if (index === 0) {
            return this.deleteFirstNode();
        }
        if (index === this.length - 1) {
            return this.deleteFromEnd();
        }
        const indexNode = this.traverse(index);
        indexNode.prev.next = indexNode.next;
        indexNode.next.prev = indexNode.prev;
        this.length--;
        return indexNode;
    }

    // Traverse to the node at a given index
    traverse(index) {
        if (index < 0 || index >= this.length) { // Edge case: index out of bounds
            console.error('Index out of bounds');
            return null;
        }

        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // Print the list
    print() {
        let current = this.head;
        const ans = [];
        while (current) {
            ans.push(current.data);
            current = current.next; // Move to the next node
        }
        console.log(ans);
    }
}

// Example usage
const dl = new DoublyLinkedList();
console.log(dl);
