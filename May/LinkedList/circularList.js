class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class CircularLinkedList{

    constructor(value = null)
    {

        if(value !== null){
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode
            this.tail.next = this.head;
            this.length = 1;
        }else{
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }

    append(value){

        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Update tail's next to head for circularity
        }
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head

        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
        this.length++;
    }

    print(){

        if(this.head === null){
            console.log("The CLS is Empty");
            return;
        }
        const ans = []; 
        let current = this.head;
        do{
            ans.push(current.data);
            current = current.next;
        }while(current !== this.head);

        return {CLS :ans, "Head": this.head, "Tail": this.tail,"Length": this.length}
    }
}

const cls = new CircularLinkedList();
cls.append(11)
cls.append(89)
cls.prepend(87)
console.log(cls);
console.log(cls.print());

