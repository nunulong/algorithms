class BSTNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


# def isBST(node):
#     return isBSTHelper(node, None, None)


# def isBSTHelper(node, maxi, mini):
#     if node is None:
#         return True
#     if maxi is not None and node.val >= maxi:
#         return False
#     if mini is not None and node.val <= mini:
#         return False
#     return isBSTHelper(node.left, node.val, mini) and isBSTHelper(node.right, maxi, node.val)

# inorder traverse
def isBST(node):
    res = []
    isBSTHelper(node, res)
    for i in range(0, len(res) - 1):
        if res[i] >= res[i+1]:
            return False
    return True


def isBSTHelper(node, arr):
    if node is not None:
        isBSTHelper(node.left, arr)
        arr.append(node.val)
        isBSTHelper(node.right, arr)


root = BSTNode(8)
root.left = BSTNode(7)
root.right = BSTNode(9)
root.left.left = BSTNode(6)
root.right.right = BSTNode(10)

print(isBST(root))
