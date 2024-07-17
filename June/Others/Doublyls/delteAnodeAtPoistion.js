class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
        this.prev = null;
    }
}

function traverse(head, pos) {
    let current = head;
    let index = 1;
    while (index < pos && current !== null) {
        current = current.next;
        index++;
    }
    return current;
}

const deleteAtGivenPosition = function (head, pos) {
    if (head === null) {
        return null;
    }

    let currentPointer = traverse(head, pos);
    if (currentPointer === null) {
        console.log("Position is out of bounds");
        return head;
    }

    // First node to delete or head node
    if (currentPointer.prev === null) {
        if (currentPointer.next !== null) {
            currentPointer.next.prev = null;
        }
        head = currentPointer.next;
        return head;
    }
    // Last node
    if (currentPointer.next === null) {
        currentPointer.prev.next = null;
        return head;
    }
    // Middle somewhere
    currentPointer.prev.next = currentPointer.next;
    currentPointer.next.prev = currentPointer.prev;

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

// Deleting the node at position 2
head = deleteAtGivenPosition(head, 2);

console.log("List after deleting node at position 2:");
printList(head);

// Deleting the first node
head = deleteAtGivenPosition(head, 1);

console.log("List after deleting node at position 1:");
printList(head);

// Deleting the last node
head = deleteAtGivenPosition(head, 2);

console.log("List after deleting node at position 2:");
printList(head);

// Edge case: Deleting from an empty list
head = deleteAtGivenPosition(null, 1);

// Edge case: Position out of bounds
head = deleteAtGivenPosition(head, 5);

console.log("List after attempting to delete from position out of bounds:");
printList(head);
