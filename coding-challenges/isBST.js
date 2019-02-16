class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insertLeft(val) {
        this.left = new BSTNode(val);
        return this.left;
    }

    insertRight(val) {
        this.right = new BSTNode(val);
        return this.right;
    }
}

// inorder tranverse
// const isBST = (root) => {
//     const inOrder = (node, arr) => {
//         if (node) {
//             inOrder(node.left, arr);
//             arr.push(node.val);
//             inOrder(node.right, arr);
//         }
//     }
//     const res = [];
//     inOrder(root, res);
//     for (let i = 0; i < res.length - 1; i++) {
//         if (res[i + 1] <= res[i]) return false;
//     }
//     return true;
// }

// recursive
const isBST = (root) => {
    const bstHelper = (node, max, min) => {
        if (!node) return true;
        if (max && node.val >= max) return false;
        if (min && node.val <= min) return false;
        return bstHelper(node.left, node.val, min) && bstHelper(node.right, max, node.val);
    }
    return bstHelper(root, null, null);
}

const root = new BSTNode(10);
root.insertLeft(5);
root.insertRight(15);

console.log(isBST(root));