class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }

    push(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    print() {
        let temp = this.head;
        while (temp) {
            let random = temp.random;
            let randomVal = random ? random.val : undefined;
            console.log("Data = ", temp.val);
            console.log("Random = ", randomVal);
            temp = temp.next;
        }
    }
}

const deepCloneSingly = (linkedList) => {
    let originalCurr = linkedList.head;
    let cloneCurr = null;
    const cache = new Map();
    while (originalCurr) {
        cloneCurr = new Node(originalCurr.val);
        cache.set(originalCurr, cloneCurr);
        originalCurr = originalCurr.next;
    }

    originalCurr = linkedList.head;
    while (originalCurr) {
        cloneCurr = cache.get(originalCurr);
        cloneCurr.next = cache.get(originalCurr.next);
        cloneCurr.random = cache.get(originalCurr.random);
        originalCurr = originalCurr.next;
    }
    return new LinkedList(cache.get(linkedList.head));
}

const myList = new LinkedList(new Node(5));
myList.push(4);
myList.push(3);
myList.push(2);
myList.push(1);

// Setting up random references.
myList.head.random = myList.head.next;
myList.head.next.random = myList.head.next.next;
myList.head.next.next.random = myList.head.next.next.next;
myList.head.next.next.next.random = myList.head.next.next.next.next;
myList.head.next.next.next.next.random = myList.head;
const clone = deepCloneSingly(myList);
clone.print();
