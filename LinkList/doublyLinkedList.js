class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(data) {
        const newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // Insertion at the beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode; // Correctly setting the previous link of the old head
        this.head = newNode;
        this.length++;
    }

    // Insertion at the end with help of tail node
    append(value) {
        const newNode = new Node(value);
        newNode.next = null;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    //Insertion after a given index;

    insertAfter(index,value){
        const newNode = new Node(value)
        const indexNode = this.traverse(index);
        newNode.next = indexNode.next;
        newNode.prev = indexNode;

        indexNode.next = newNode;
        newNode.next.prev = newNode;
        return newNode;
        
    }
    //Insertation Before a given node
    insertBefore(index,value){
        const newNode = new Node(value);
        const indexNode = this.traverse(index);
        
        newNode.next = indexNode;
        newNode.prev = indexNode.prev;

        indexNode.prev.next = newNode;
        indexNode.prev  = newNode;
    }

    //Deletation of the first node
    deleteFirstNode(){
        const deletedNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        return deletedNode;
    }
    //Deletation of the last node with help of tail node
    deleteFromEnd(){
        const deletedNode = this.tail;
        this.tail = this.tail.prev
        this.tail.next = null;
        return deletedNode;
    }
    //Deletation at a given index;
    delete(index){
        const deletedNode = this.tail;
        let indexNode = this.traverse(index);

        indexNode.prev.next = indexNode.next;
        indexNode.next.prev = index.prev;
        return deletedNode;
    }

    // Traverse to the node at a given index
    traverse(index) {
        if (index < 0 || index >= this.length) {
            return null; // Return null if index is out of bounds
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
const dl = new DoublyLinkedList(10);
dl.append(5);
dl.append(9);
dl.append(11)
dl.print(); 
// dl.deleteFirstNode()
// dl.deleteFirstEnd()
dl.delete(1)
dl.print()
// console.log(dl.traverse(3)); 
