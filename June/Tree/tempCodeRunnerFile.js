    postOrderTraversal(currentNode, result = []){
        if(currentNode !== null){
            this.postOrderTraversal(currentNode.left,result);
            this.postOrderTraversal(currentNode.right,result);
            result.push(currentNode.value);
        }
    }