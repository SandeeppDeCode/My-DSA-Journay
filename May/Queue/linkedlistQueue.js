class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularQueue{
    
    constructor(){
        this.front = null;
        this.rear = null;
    }

    isEmpty(){
        return this.front === null;
    }

    enqueue(value){
        
        const newNode = new Node(value);
        //rear null
        if(this.rear === null){
            // add the first element
            this.front = newNode;
            this.rear = newNode;
            this.rear.next = this.front;

        }else{
            this.rear.next = newNode;
            this.rear = newNode;
            this.rear.next = this.front;

        }
    }

    dequeue(){
        if(this.front === null){
            console.log("Empty Queue");
            return
        }
        let element = this.front.data;

        if(this.front === this.rear){
            //only one element 
            this.front = null;
            this.rear = null;
        }else{
            this.front = this.front.next;
            this.rear.next = this.front; // circular ls;
        }
        return element;
    }

    print(){
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        //i have circular queue so no node is pointing to null;
        let arr = [];
        let current = this.front;
        do {
            arr.push(current.data);
            current = current.next;
        } while (current !== this.front); // this is important
        console.log(arr);
    }
}

const q  = new CircularQueue();
q.enqueue(4)
q.enqueue(6)
q.enqueue(3)
q.enqueue(99)
q.dequeue()
q.dequeue()
q.dequeue()

q.print()

console.log(q);

// q.dequeue() 
// console.log(q);
// q.print();

