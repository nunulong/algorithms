const minPathSum = (root) => {
  if (!root) return 0;
  let sum = root.val;
  let leftSum = Infinity;
  let rightSum = Infinity;
  if (!root.left && !root.right) {
    return sum;
  } else {
    if (root.left) {
      leftSum = minPathSum(root.left);
    }
    if (root.right) {
      rightSum = minPathSum(root.right);
    }
    sum += Math.min(leftSum, rightSum);
  }
}