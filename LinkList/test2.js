class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    print(){
        let currentNode = this.head;
        const ans = [];
        while(currentNode){
            ans.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(ans);
    }
    traverseToindex(index){
        let currentNode = this.head;
        let count = 0;
        while(count < index){
            
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    insert(index,value){
        const newNode = new Node(value);
        let previousNode = this.traverseToindex(index-1);
        console.log(previousNode);
        newNode.next = previousNode.next;
        previousNode.next = newNode.next;
    }
    delete(index){
        let previousNode = this.traverseToindex(index-1);
        let deletedNode = previousNode.next;
        previousNode.next = previousNode.next.next;
        return deletedNode;

    }
    insertAtFirstIndex(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    insertAtEnd(value){
        const newNode = new Node(value);
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        newNode.next = null;
        currentNode.next = newNode;
        this.tail = newNode

        return this.tail;
    }







}
const ls = new LinkedList(10);

ls.append(5)
ls.append(15)
ls.append(20)
ls.prepend(0)
ls.print();
ls.insert(3,99)
ls.print()
console.log(ls.delete(3))
ls.print()

console.log(ls.insertAtFirstIndex(999));
console.log(ls.insertAtEnd(-1999));
ls.print();
console.log(ls);

