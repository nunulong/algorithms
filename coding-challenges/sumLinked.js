class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const sumLinked = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (!l1 && !l2) return null;
    let num1 = '';
    let cur1 = l1;
    do {
        num1 += cur1.val.toString();
        cur1 = cur1.next;
    } while (cur1);
    num1 = Number(num1.split('').reverse().join(''));
    console.log(num1);
    let num2 = '';
    let cur2 = l2;
    do {
        num2 += cur2.val.toString();
        cur2 = cur2.next;
    } while (cur2);
    num2 = Number(num2.split('').reverse().join(''));
    console.log(num2);
    let num = num1 + num2;
    console.log(num);
    const result = new Node(num % 10);
    let cur = result;
    while ((num - num % 10) / 10 > 0) {
        num = (num - num % 10) / 10
        cur.next = new Node(num % 10);
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
