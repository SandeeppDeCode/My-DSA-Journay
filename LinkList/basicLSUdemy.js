class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++

    }
    insert(index,value){
        const newNode = new Node(value);
        if(index === 0){
            return this.prepend(value);
            
        }
        if(index >= this.length){
            return this.append(value)
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
    }
    remove(index){
        const leader = this.traverseToIndex(index-1)
        const unwanted = leader.next;
        leader.next = unwanted.next;
        this.length--;
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
    print(){
        const ans = [];
        let currentNode = this.head;

        while(currentNode !== null){
            ans.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return {LinkedList: ans, Length:this.length};
    }



}

const ls = new LinkedList(10);
ls.append(99)
ls.append(5)
ls.append(10)
ls.prepend(-1)
console.log(ls.insert(0,87))
ls.remove(1)
console.log(ls.print())
console.log(ls.traverseToIndex(5));
