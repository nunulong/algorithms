class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const bstFromArray = (arr) => {
    const helper = (arr, start, end) => {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        const root = new BinaryTreeNode(arr[mid]);
        root.left = helper(arr, start, mid - 1);
        root.right = helper(arr, mid + 1, end);
        return root;
    }
    return helper(arr, 0, arr.length - 1);
}

const isBST = (root) => {
    const traverse = (root, arr) => {
        if (root) {
            traverse(root.left, arr);
            arr.push(root.value);
            traverse(root.right, arr);
        }
    }
    const arr = [];
    traverse(root, arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

const maxDepth = (root) => {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7];
let bst = bstFromArray(sortedArray);

console.log(isBST(bst));   // should print true
console.log(maxDepth(bst));             // should print 3

sortedArray = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100];
bst = bstFromArray(sortedArray);

console.log(isBST(bst));   // should print true
console.log(maxDepth(bst));
