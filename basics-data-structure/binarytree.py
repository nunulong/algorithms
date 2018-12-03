class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left, self.right = None, None


class Traverse(object):
    def __init__(self):
        self.traverse_path = list()

    def preorder(self, root):
        if root:
            self.traverse_path.append(root.value)
            self.preorder(root.left)
            self.preorder(root.right)

    def inorder(self, root):
        if root:
            self.inorder(self.left)
            self.traverse_path.append(root.value)
            self.inorder(self.right)

    def postorder(self, root):
        if root:
            self.postorder(self, root.left)
            self.postorder(self, root.right)
            self.traverse_path.append(root.value)
