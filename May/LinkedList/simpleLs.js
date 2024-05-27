class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
//creating and linking
let head = new Node(20);
head.next = new Node(50);
head.next.next = new Node(100);

console.log(head);