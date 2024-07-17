
class Node {
    constructor(data) {
        this.val = data;
        this.next = null;
        this.prev = null;
    }
}

const reverse1 = function (head) {
    let current = head;
    let stack = [];
    while (current !== null) {
        stack.push(current.val);
        current = current.next;
    }
    let newNode = new Node(stack.pop());
    let newHead = newNode;
    current = newHead;
    while (stack.length !== 0) {
        const newNode = new Node(stack.pop());
        newNode.prev = current;
        current.next = newNode;
        current = newNode;
    }
    return newHead;
}

const reverse = function (head) {
    // Check if the list is empty
    // or has only one node
    if (head === null || head.next === null) {
        // No change is needed;
        // return the current head
        return head;
    }
    let current = head;
    let last = null;

    while(current !== null){
        // swpping
        //temp = a;
        //a = b;
        // b = temp
        last = current.prev;
        current.prev = current.next;
        current.next = last;


        current = current.prev; // pointer movement 
    }
    let newHead = last.prev
    return newHead;
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
head = reverse(head);

console.log("List after adding 5 at position 1:");
printList(head);
