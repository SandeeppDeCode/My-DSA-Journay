class Node{
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(value = null) {
        if(value === null){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }else{
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }
    isEmplty(){
        return this.head === null;
    }
    /*
        Add  A node in the begining of a doubly linked list;
            1. First Connect the newNode Next pointer to head and prev is pointing to null;
            2. Header prev pointer to newNode;
            3. make the neNode the head;
    */
    prepend(value){
        const newNode = new Node(value);
        if(this.isEmplty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    /*
        Adds a node at the end of doubly linked List;
            1. First connect the prev of first node to tail
            2. Connect the tail next to newNode;
            3. newnode next is pointing to null;
            4. Make the newNode tail;
    */

    append(value){
        const newNode = new Node(value);
        if(this.isEmplty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++
    }
    print(){
        const ans = [];
        let current = this.head;
        while(current){  
            ans.push(current.data);
            current = current.next;
        }
        return { "DoublyLinkedList":ans, "Head": this.head, "Tail": this.tail,"Length":this.length}
    }
    /*
        Insert a Node a  given index;
            1. Get hold of leader(inde-1) and follower = leader.next
                leader.next = newNode;
                newNode.prev = leader;

                newNode.Next = follower;
                follower.prev = newNode;
    */
    insert(index,value){

        if(index < 0 || index > this.length)
        {
            console.log("Index out of bound");
            return null;
        }
        if(index === 0){
            this.prepend(value);
            return;
        }
        if(index === this.length){
            this.append(value);
            return;
        }
        const leader = this.travserseTo(index-1);
        const newNode = new Node(value);
        const follower = leader.next;
        newNode.next = leader.next;
        newNode.prev = leader;
        
        leader.next = newNode;
        newNode.next.prev = newNode;

        this.length++;



    }
    remove(index){
        if(index < 0 || index >= this.length)
        {
                console.log("Index out of bound");
                return null;
        }
        if(index ===  0){
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            }else{
                this.head = this.head.next;
                this.head.prev = null;
            }
        }else{

                const leader = this.travserseTo(index-1);
                const unwanted = leader.next;

                leader.next = unwanted.next //or leader.next.next;
                
                if(unwanted.next){

                    //enter contion when last is not null;
                    unwanted.next.prev = leader
                }else{
                    //enter when last is null.
                    this.tail = leader;
                }
        }
        this.length--;

        
    }
    travserseTo(index){
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++;
        }
        console.log(current);
        return current;
    }
    

}
// Test the implementation
const dl = new DoublyLinkedList(6);
dl.prepend(5);
dl.prepend(100);
dl.append(99);
dl.insert(0, 88);

console.log(dl.print()); // Before removal
dl.remove(2);
console.log(dl.print()); // After removal