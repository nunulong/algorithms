# Linked List Implementation
class LinkNode:
    def __init__(self, value):
        self.value = value
        self.next = None


#  reverse linked list
class LinkNode:
    def __init__(self, value):
        self.value = value
        self.next = None

    def reverse(self, head):
        prev = None
        while head:
            temp = head.next
            head.next = prev
            prev = head
            head = temp
        return prev


class DLinkNode:
    def __init__(self, value):
        self.value = value
        self.prev = self.next = None

    def reverse(self, head):
        current = None
        while head:
            current = head
            head = current.next
            current.next = current.prev
            current.prev = head
        return current



