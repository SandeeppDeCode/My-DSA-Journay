class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function makeLs(arr) {
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        newNode.prev = current;
        current.next = newNode;
        current = newNode;
    }
    return head;
}

class Solution {
    findPairs(head, target) {
        const pairs = [];
        let left = head;
        let current = head;
        while (current.next !== null) {
            current = current.next;
        }
        let right = current;
        while (left !== right && left.prev !== right) {
            const currentSum = left.data + right.data;
            if (currentSum === target) {
                pairs.push([left.data, right.data]);
                left = left.next;
                right = right.prev;
            } else if (currentSum < target) {
                left = left.next;
            } else {
                right = right.prev;
            }
        }
        return pairs;
    }
}

// Testing the code
let sol = new Solution();
let ls1 = makeLs([1, 2, 4, 5, 6, 8, 9]);
console.log("Original list:", [1, 2, 4, 5, 6, 8, 9]);
let ans2 = sol.findPairs(ls1, 7);
console.log(ans2);


/*
1. Use left !== right to ensure pointers haven't met.
2. Use left.prev !== right to handle cases where the pointers cross each other in an odd-sized list.
This ensures that the function stops at the correct point without missing any valid pairs
*/