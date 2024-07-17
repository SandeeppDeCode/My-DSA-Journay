class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
        this.prev = null;
    }
}

function traverse(head, pos) {
    let current = head;
    let index = 0;
    while (index < pos) {
        current = current.next;
        index++;
    }
    return current;
}

const addAtGivenPosition = function (head, pos, data) {
    const newNode = new Node(data);
    let currentPointer = traverse(head, pos);

    newNode.prev = currentPointer;
    newNode.next = currentPointer.next;

    if (currentPointer.next !== null) {
        currentPointer.next.prev = newNode;
    }
    
    currentPointer.next = newNode;

    return head;
}

// Example to test the function
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

// Creating a sample doubly linked list
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

console.log("Original list:");
printList(head);

// Adding node with value 5 after position 1
head = addAtGivenPosition(head, 2, 5);

console.log("List after adding 5 at position 1:");
printList(head);
