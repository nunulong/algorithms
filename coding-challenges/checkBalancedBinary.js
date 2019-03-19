const checkBalanced = (root) => {
    if (!root) return true;
    const maxDepth = (root) => {
        if (!root) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    const minDepth = (root) => {
        if (!root) return 0;
        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    }
    return maxDepth(root) === minDepth(root);
}

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

const root = new BinaryTreeNode(5);
console.log(checkBalanced(root));

root.insertLeft(10);
console.log(checkBalanced(root));

root.insertRight(11);
console.log(checkBalanced(root));