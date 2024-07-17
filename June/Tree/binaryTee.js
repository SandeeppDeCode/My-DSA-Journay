class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to set the root of the tree
    setRoot(value) {
        this.root = new Node(value);
    }

    // Method to add a left child to a node
    addLeft(parent, value) {
        const newNode = new Node(value);
        parent.left = newNode;
        return newNode;
    }

    // Method to add a right child to a node
    addRight(parent, value) {
        const newNode = new Node(value);
        parent.right = newNode;
        return newNode;
    }

    // In-order traversal (Left, Root, Right)
    inOrderTraversal(node, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal(node, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal (Left, Right, Root)
    postOrderTraversal(node, result = []) {
        if (node !== null) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const tree = new BinaryTree();
tree.setRoot(78)
tree.addLeft(57)
console.log(tree);