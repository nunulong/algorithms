class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedToSum = (linked) => {
    if (!linked) return null;
    let num = '';
    let cur = linked;
    do {
        num += cur.val.toString();
        cur = cur.next;
    } while (cur);
    return Number(num.split('').reverse().join(''));
}

const sumLinked = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;

    let num1 = linkedToSum(l1);
    let num2 = linkedToSum(l2);
    let num = num1 + num2;
    num = num.toString().split('').reverse();
    const result = new Node(Number(num[0]));
    let cur = result;
    for (let i = 1; i < num.length; i++) {
        cur.next = new Node(Number(num[i]));
        cur = cur.next;
    }
    return result;
}

const l1 = new Node(9);
l1.next = new Node(9);
const l2 = new Node(5);
l2.next = new Node(2);
l2.next.next = new Node(1);
console.log(sumLinked(l1, l2));
