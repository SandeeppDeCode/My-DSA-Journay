class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function makeLs(arr){
    let head = new Node(arr[0]);
    let current = head;
    for(let i = 1; i < arr.length;i++){
        const newNode = new Node(arr[i]);
        newNode.prev = current;
        current.next = newNode;
        current = newNode;
    }
    return head;
}






const printLs = function(head){
    let ans  = [];
    let current = head;
    while (current !== null) {
        ans.push(current.data);
        current = current.next;
    }
    return ans;
}


// Your code correctly handles deleting all occurrences of a given key from a doubly linked list. Here are the steps and a review of the code:

// Constructing the Doubly Linked List: makeLs function constructs the list from an array.
// Finding All Occurrences: findAllOcc function traverses the list and records the positions of all nodes containing the key.
// Traversing to a Given Position: traverse function moves to the specified position in the list.
// Deleting a Node at a Given Position: deleteAtGivenPosition function handles the deletion of a node, taking care of different cases (head node, middle node, last node).
// Deleting All Occurrences: deleteAllOcc function iterates through all positions of the key and deletes nodes one by one.




/// another way




class Solution {
    deleteAllOccurOfX(head, key) {
        let current = head;

        while (current !== null && current.next !== null) {

            if (current.data === current.next.data) {
                // Handle the case where the node to delete is the head node
                // if (current.prev === null) {
                //     head = current.next;
                //     if (head !== null) {
                //         head.prev = null;
                //     }
                // } else {
                //     // Handle the case where the node to delete is in the middle or the end
                //     current.prev.next = current.next;
                //     if (current.next !== null) {
                //         current.next.prev = current.prev;
                //     }
                // }

                if(current.prev === null){
                    if(current.next !== null){
                        current.next.prev = null;
                    }
                    head = current.next;
                }else{
                    current.prev.next = current.next;
                    if(current.next !== null){
                        current.next.prev = current.prev
                    }
                }

            }
            current = current.next;
        }

        return head;
    }
}

// Helper functions for testing

// Testing the code
let sol = new Solution();
let ls1 = makeLs([1,2,2,3]);
console.log("Original list:", [1, 2, 3, 2, 5, 2, 2]);
let ans2 = sol.deleteAllOccurOfX(ls1, 2);
console.log("Modified list:", printLs(ans2));
