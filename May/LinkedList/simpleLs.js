class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(value = null) {
        if (value === null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        } else {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }
        let ans = [];
        let current = this.head;
        while (current) {
            ans.push(current.data);
            current = current.next;
        }
        return { "LinkedList": ans, "Head": this.head.data, "Tail": this.tail.data, "Length": this.length };
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            console.log("Index out of bounds");
            return;
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
        let holdingPointer = this.traverseToIndex(index - 1);
        newNode.next = holdingPointer.next;
        holdingPointer.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            console.log("Index out of bounds");
            return;
        }
        if (index === 0) {
            let unwanted = this.head;
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return unwanted;
        }
        let leader = this.traverseToIndex(index - 1);
        let unwanted = leader.next;
        leader.next = unwanted.next;
        if (index === this.length - 1) {
            this.tail = leader;
        }
        this.length--;
        return unwanted;
    }

    traverseToIndex(index) {
        if (index < 0 || index >= this.length) {
            console.log("Index out of bounds");
            return null;
        }
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    
    clear(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    size(){
        return this.length;
    }
    find(value){
        let currentNode = this.head;
        let loc = [];
        let index = 0;
        while(currentNode){
            if(currentNode.data === value){
                loc.push(index)
            }
            currentNode = currentNode.next;
            index++;
        }
        if(loc.length === 0){
            return -1
        }
        return loc; //value not found
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        this.tail = this.head;
        while(current){
            next  = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    iterate(callback) {
        let currentNode = this.head;
        while (currentNode) {
            callback(currentNode.data);
            currentNode = currentNode.next;
        }
    }


    //slow and fast pointer concept
    // New methods using slow and fast pointer technique
    findMiddle() {
        if (this.head === null) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }

    detectCycle() {
        if (this.head === null) return false;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;  // Cycle detected
            }
        }

        return false;  // No cycle
    }

    delete(value){
        let loc = this.find(value);
        if(loc === -1){
            return this.head;
        }
        for(let i = 0; i < loc.length;i++){
            this.remove(loc[i]);
        }
        return this.head;

    }
    
}

const ls = new LinkedList();
ls.append(5);
console.log(ls.remove(0));
console.log(ls.print());
console.log(ls);