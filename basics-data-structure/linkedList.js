// Linked List Implementation
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// reverse linked list
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    reverse(head) {
        let prev = null;
        while (head) {
            let temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }
        return prev;
    }
}

class DLinkNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    reverse(head) {
        let current = null;
        while (head) {
            current = head;
            head = current.next;
            current.next = current.prev;
            current.prev = head;
        }
        return current;
    }
}