class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor(value = null) {
        if (value === null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        } else {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
            this.length = 1;
        }
    }

    print() {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }
        const ans = [];
        let current = this.head;
        do {
            ans.push(current.value);
            current = current.next;
        } while (current !== this.head);
        return { Circular: ans, "Head": this.head.value, "Tail": this.tail.value, "Length": this.length };
    }

    isEmpty() {
        return this.head === null ? "Circular linked list is empty" : "Circular linked list is not empty";
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        this.length++;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error("Index out of bounds");
            return null;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error("Index out of bounds");
            return null;
        }
        if (index === 0) {
            const unwanted = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
            this.length--;
            return unwanted;
        }

        const leader = this.traverseToIndex(index - 1);
        const unwanted = leader.next;
        leader.next = unwanted.next;
        if (unwanted === this.tail) {
            this.tail = leader;
            this.tail.next = this.head;
        }
        this.length--;
        return unwanted;
    }

    traverseToIndex(index) {
        if (index < 0 || index >= this.length) {
            console.error("Index out of bounds");
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}

// Testing the CircularLinkedList class
const cls = new CircularLinkedList();
console.log(cls.print());
cls.append(108);
cls.prepend(10);
cls.prepend(11);
cls.prepend(1199);
cls.prepend([1, 2, 3]);
cls.append("C");
cls.append("Hello");
cls.insert(0, 74);
cls.remove(7);
console.log(cls.print());
cls.traverseToIndex(2);
