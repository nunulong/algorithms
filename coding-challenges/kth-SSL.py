class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


# iterate thru linked list
# def kthSSL(num, head):
#     curr = head
#     len = 1
#     while curr.next is not None:
#         curr = curr.next
#         len = len + 1
#     inx = len + 1 - num
#     curr = head
#     count = 1
#     while count < inx:
#         curr = curr.next
#         count = count + 1
#     return curr

# two pointers solution
def kthSSL(num, head):
    res = head
    ref = head
    count = 1
    while count < num:
        ref = ref.next
        count += 1
    while ref.next is not None:
        ref = ref.next
        res = res.next
    return res


a = ListNode("Australian Sheperd")
b = ListNode("Beagle")
c = ListNode("Cairne Terrier")
d = ListNode("Dobermann")
e = ListNode("English Mastiff")

a.next = b
b.next = c
c.next = d
d.next = e

res = kthSSL(2, a)
print(res.val, res.next)
