# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        l3 = ListNode()
        curr = l3
        while l1 or l2:
            x = l1.val if l1 is not None else 0
            y = l2.val if l2 is not None else 0
            sum = x + y + carry
            carry = sum // 10
            print(sum)
            curr.next = ListNode(sum % 10)
            l1 = l1.next if l1 is not None else None
            l2 = l2.next if l2 is not None else None
            curr = curr.next
        if carry > 0:
            curr.next = ListNode(carry)
        return l3.next
