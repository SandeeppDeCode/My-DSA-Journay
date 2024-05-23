class Node{
    constructor(value){
        this.value  = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;

        this.tail = newNode;
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }
    print(){
        const ans = [];
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode)
            ans.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(currentNode);
        return ans;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter < index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index,value){
        const newNode = new Node(value);
        if(index >= this.length){
            return this.append(value);
        }
        const leader = this.traverseToIndex(index-1);
        
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
    }
    remove(index){
        const leader = this.traverseToIndex(index-1)
        const unwanted = leader.next;
        leader.next = unwanted.next;
    }
    middle(){
        if(this.length % 2 !== 0){
            return this.traverseToIndex( Math.floor((this.length + 1 )/ 2) - 1)
        }else{
            return this.traverseToIndex( Math.floor((this.length + 1 )/ 2) + 1)

        }
    }
    len(){
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            currentNode = currentNode.next;
            count++
        }
        return count;
    }
}

const ls = new LinkedList(10)
ls.append(99)
ls.append(100)
ls.prepend(0)
ls.append(9901)
ls.append(929)


console.log(ls.print());
// console.log(ls.middle());
console.log(ls.len());



