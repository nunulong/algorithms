class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Traverse {
    constructor() {
        this.traverse = [];
    }

    preorder(root) {
        if (root) {
            this.traverse.push(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            this.traverse.push(root.value);
            this.inorder(root.right);
        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            this.traverse.push(root.value);
        }
    }
}