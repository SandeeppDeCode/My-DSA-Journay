class Node {
    constructor(data){
        this.val = data;
        this.next = null;
        this.prev = null;
    }
}

const convertToDl = function(arr){
    if(arr.length === 0) {
        return null;
    }

    const newNode = new Node(arr[0]);
    let head = newNode;
    let current = head;
    for(let i = 1; i < arr.length;i++){
        const newNode = new Node(arr[i]);
        newNode.next = null;
        newNode.prev = current;
        current.next = newNode;
        current = newNode;
    }
    return head;
}
const dl  = convertToDl([1,2]);
// console.log(dl);

function traverse(head,pos){
    let current = head;
    let index = 0;
    while (index < pos) {
        current = current.next;
        index++;
    }
    return current;
}
const addAtGivenPostion = function (head,pos,data){
    const newNode = new Node(data);
    let currentPointer = traverse(head,pos);
    newNode.prev = currentPointer;
    newNode.next = currentPointer.next;
    currentPointer.next = newNode;
    currentPointer.next.prev = newNode;
    return head;
}

console.log(addAtGivenPostion(dl,1,5));