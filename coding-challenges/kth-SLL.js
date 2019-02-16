class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// iterate thru lined list
// const kthSSL = (num, head) => {
//     let curr = head;
//     let inx = 1;
//     while (curr.next) {
//         inx++;
//         curr = curr.next;
//     }

//     if (inx < num) return "node not exist"
//     let inxRes = inx + 1 - num;
//     curr = head;
//     for (let i = 1; i < inxRes; i++) {
//         curr = curr.next;
//     }
//     return curr;
// }

// two pointers
const kthSSL = (num, head) => {
    let res = head, ref = head;
    for (let i = 1; i <= num; i++) {
        ref = ref.next;
    }
    while (ref.next) {
        res = res.next;
        ref = ref.next;
    }
    return res;
}

let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthSSL(2, a));