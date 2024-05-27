class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(value = null) {
        //for creating emmoty ls
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
    print(){
        if(this.head === null){
            console.log("The ls is empty");
            return;
        }
        let ans = [];
        let current = this.head;
        while (current) {
            ans.push(current.data);
            current = current.next;
        }
        // console.log({"LinkedList" : arr, "Head": this.head.data, "Tail": this.tail.data});
        return {"LinkedList" : ans, "Head": this.head.data, "Tail": this.tail.data, "Length": this.length}
    }
    isEmpty(head){
        
        if(head === null)
            return "Linked list is Empty";
        else
            return "Linked list is Not Empty";
    }
    prepend(value){

        const newNode = new Node(value);
        if(this.head === null){ //checkign for empty ls input
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    append(value){
        const newNode = new Node(value);
        if(this.head === null){ //empty ls check;
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    insert(index,value){
        
        if(index < 0 || index > this.length){
            console.error("Index out of bounds");
            return null;
        }
        if(index === 0){
            this.prepend(value)
            return
        }
        const newNode = new Node(value);

        const holdingPointer = this.traverseToIndex(index - 1);
        newNode.next = holdingPointer.next;
        holdingPointer.next = newNode;
        this.length++;
    }

    remove(index){

        if(index < 0 || index >= this.length){
            console.log("Index out of bounds");
            return null;
        }
        if(index === 0){
            let unwanted = this.head;
            this.head = this.head.next;
            this.length--;
            return unwanted;
        }
        const leader = this.traverseToIndex(index-1);
        let unwanted = leader.next;
        leader.next = unwanted.next;
        //or leader.next = leader.next.next;
        this.length--;
        return unwanted;

    }
    traverseToIndex(index){
        if(index < 0 || index >= this.length){
            console.log("Index out of bounds");
            return null;
        }
        let counter  = 0;
        let current = this.head;
        while (counter <  index) {
            current = current.next;
            counter++; 
        }
        console.log(current.data);
        return current;
    }





}
const ls = new LinkedList();
ls.prepend(10)
ls.prepend(199)
ls.remove(0)

console.log(ls.traverseToIndex(1));
console.log(ls.print())
console.log(ls.print());
// ls = head;
ls.append(108)
ls.prepend(10)
ls.prepend(11)
ls.prepend(1199)
ls.prepend([1,2,3])
ls.append("C")
ls.append("Hello")
ls.insert(0,74)
ls.remove(0)
console.log(ls.print());
// ls.traverseToIndex(2)
// console.log(1 < 0 || 1>=1); short curit
