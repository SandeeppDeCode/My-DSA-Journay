class Node{
    constructor(value){
        this.data = value;
        this.next = null;

    }
}
function ConvertArrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }
    const newNode = new Node(arr[0]);
    let head = newNode;
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        current.next = newNode;
        current = newNode;
    }
    return head;
}

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let loop = null;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(fast == slow){
            loop = slow;
        }
    }
    let current = head;
    let index = 0;
    while(current !== null){
        if(current === loop.next){
            return index;
        }
        index++;
    }
    return null;
};