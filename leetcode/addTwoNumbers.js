class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = (list1, list2) => {
    let sum = (list1.val || 0) + (list2.val || 0);
    let currVal = sum % 10;
    let head = new ListNode(currVal);
    let carry = Math.floor(sum / 10);
    let curr = head;

    while (list1.next || list2.next) {
        list1 = list1.next || new ListNode(0);
        list2 = list2.next || new ListNode(0);
        sum = list1.val + list2.val + carry;
        carry = Math.floor(sum / 10);
        currVal = sum % 10;
        curr.next = new ListNode(currVal);
        curr = curr.next;
    }
    if (carry) curr.next = new ListNode(carry);
    return head;
}

const head1 = new ListNode(1);
head1.next = new ListNode(8);
const head2 = new ListNode(0);

console.log(addTwoNumbers(head1, head2));