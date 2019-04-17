/*
Implement a function depthFirstForEach, once as a recursive function, and then again in an iterative fashion. Your functions should receive a callback and invoke that callback on each node as it is traversing in depth-first fashion. Your functions should also receive a tree node so that it can begin traversing.

Here is an example tree class:

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
For example, given a tree like the following

                  6
                /   \
              10     18
             /         \
            9           89
and the following callback function

const cb = (x) => console.log(x);
your depthFirstForEach function should start at the root node and print out, in this order, 6, 10, 9, 18, 89.

Analyze the time and space complexity of your recursive and iterative solutions.

*/

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

// const depthFirstForEach = (root, cb) => {
//     if (!root) {
//         return null;
//     }
//     cb(root.value);
//     if (root.left) {
//         depthFirstForEach(root.left, cb);
//     }
//     if (root.right) {
//         depthFirstForEach(root.right, cb);
//     }
// }

// const cb = (x) => console.log(x);
// const root = new BinaryTreeNode(6);
// root.insertLeft(10);
// root.left.insertLeft(9);
// root.insertRight(18);
// root.right.insertRight(89);

// //console.log(root);
// depthFirstForEach(root, cb);

const depthFirstForEach = (root, cb) => {
    if (!root) return null;
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const curr = stack.pop();
        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
        cb(curr.value);
    }
}

const cb = (x) => console.log(x);
const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.left.insertLeft(9);
root.insertRight(18);
root.right.insertRight(89);

//console.log(root);
depthFirstForEach(root, cb);


