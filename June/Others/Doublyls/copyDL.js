class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const makeDl = function(arr){
    const head = new Node(arr[0]);  
    let current = head;
    for (let i = 1; i < arr.length; i++) {  
        const newNode = new Node(arr[i]);
        newNode.prev = current;
        current.next = newNode;
        current = newNode;
    }
    return head;
}
head = makeDl([1,2,3,4,5]);

