class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getLengthAndTail(head) {
    let length = 1;
    let current = head;
    while (current.next !== null) {
        length++;
        current = current.next;
    }
    return { length, tail: current };
}

function rotate(head, k) {
    if (!head || k === 0) {
        return head;
    }

    const { length, tail } = getLengthAndTail(head);
    k = k % length; // Effective rotations needed

    if (k === 0) {
        return head;
    }

    // Make the list circular
    tail.next = head;

    // Find the new tail: (length - k) steps from the start
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }

    // The new head is the next node after the new tail
    let newHead = newTail.next;
    // Break the circle
    newTail.next = null;

    return newHead;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Example usage
let l1 = createLinkedList([1, 2, 3, 4, 5]);
let rotatedList = rotate(l1, 2);
printList(rotatedList); // Output should be 4 -> 5 -> 1 -> 2 -> 3
