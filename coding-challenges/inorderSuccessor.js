const inorderSuccessor = (node) => {
    if (!node) return null;
    if (node.right) {
        return minNode(node.right);
    }
    if (!node.right) {
        let p = node.parent;
        let n = node;
        while (p) {
            if (p.right == n) {
                n = p;
                p = p.parent;
            }
            if (p.left == n) {
                return p;
            }
        }
        return null;
    }
}

const minNode = (node) => {
    if (!node) return null;
    let current = node;
    while (current.left) {
        current = current.left
    }
    return current;
}