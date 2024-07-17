class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while(true){

            if(value < currentNode.value){
                //Left
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;

            }else{
                //right
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    return;
                }
                currentNode  = currentNode.right;
            }
        }
    }
    search(value){
        let currentNode = this.root;

        while(currentNode !== null){
            if(value < currentNode.value){
                currentNode = currentNode.left
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }else{
                return currentNode
            }
        }
        return false;
    }
    levelOrderTraversal() {
        const result = [];
        const queue = [];
        
        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode.value);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        console.log(result);
    }
    // root left rigth;
    preOrderTraversal(currentNode, result = []){

        if(currentNode !== null){
            result.push(currentNode.value);
            // console.log(currentNode.value);
            this.preOrderTraversal(currentNode.left,result);
            this.preOrderTraversal(currentNode.right,result);
        }
        return result;
    }
    // left Root rigth
    inOrderTraversal(currentNode,result = []){
        if(currentNode !== null){
            this.inOrderTraversal(currentNode.left,result);
            result.push(currentNode.value)
            this.inOrderTraversal(currentNode.right,result);
        }
        return result;
    }
    // left right root;
    postOrderTraversal(currentNode, result = []){
        if(currentNode !== null){
            this.postOrderTraversal(currentNode.left,result);
            this.postOrderTraversal(currentNode.right,result);
            result.push(currentNode.value);
        }
        return result;
    }
}

const tree =  new BinaryTree();
tree.insert(15)
tree.insert(10)
tree.insert(5)
tree.insert(12)
tree.insert(30)
tree.insert(16)
tree.levelOrderTraversal()

console.log(tree.preOrderTraversal(tree.root))
console.log(tree.inOrderTraversal(tree.root))
console.log(tree.postOrderTraversal(tree.root))
console.log(tree.search(11));
// console.log(tree);