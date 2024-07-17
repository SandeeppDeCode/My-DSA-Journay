class Node{
    constructor(val) {
        this.val = val;
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
const l1 = ConvertArrayToLinkedList([4,8,4,5]);
const l2 = ConvertArrayToLinkedList([1,2,3,4,5]);


function reverse(node){
    let current = node;
    let prev = null;
    while(current !== null){
        let front = current.next;
        current.next = prev;
        prev = current;
        current = front

    }
    return prev;
}
function getLength(head){
    let count = 0;
    let current = head;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count
}


// [2,1,3,5,6,4,7];
//  1 2 3 4 5 6 7 
//  2 3 6 7 1 5 4

function segrate(head) {
    let dummpyNodeOdd = new Node(0);
    let dummpyNodeEven = new Node(0);
    dummpyNodeOdd  = head;
    dummpyNodeEven = head.next;
    let odd = head;
    let even = head.next;
    let current = head.next.next;
    let n = getLength(head)
    console.log(n);
    // let current = head;
    let i = 3;
    while(current !== null && i <= n){

        if(i % 2 !== 0){
            odd.next = current;
            odd = current;

        }else{
            even.next = current;
            even = current;

        }
        current = current.next;
        i++;
    }
    current = dummpyNodeOdd;
    while(current.next !== null){

        current = current.next;
    }
    console.log(current);
    current.next = dummpyNodeEven;
    return dummpyNodeOdd;
}
console.log(segrate(l2));