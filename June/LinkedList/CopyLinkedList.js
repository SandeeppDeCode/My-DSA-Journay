class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const makeLs = function(arr){
    const head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        current.next = newNode;
        current = newNode;
        
    }
    return head;
}

const head = makeLs([1,2,3]);

const copyls = function(head){
    const dummyNode = new Node(null);
    let current = dummyNode;
    let temp  = head;
    while(temp !== null){
        current.next = temp;
        current = temp;
        temp = temp.next;
    }
    return dummyNode.next;
}
console.log(copyls(head));