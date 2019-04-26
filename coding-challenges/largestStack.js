/*
Assume we have a Stack class given by the following code:

We wish to augment this Stack class such that we can always fetch the max value from the Stack in constant time.

Use the given Stack class to implement a new MaxStack class that has all the same methods as the base Stack class, along with a getMax method that returns the max value of the MaxStack in O(1) time. getMax should not remove the item.

Analyze the time and space complexity of the methods of your MaxStack class. What tradeoffs had to occur in order for you to achieve O(1) retrieval of the maximum value?

*/

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length) {
            return this.items.pop();
        }
        return null;
    }

    peek() {
        if (this.items.length) {
            return this.items[this.items.length - 1];
        }
        return null;
    }
}

class MaxStack {
    constructor() {
        this.storage = new Stack();
        this.maxStorage = new Stack();
    }

    push(item) {
        this.storage.push(item);
        if (!this.maxStorage.peek() || item > this.maxStorage.peek()) {
            this.maxStorage.push(item);
        }
    }

    pop() {
        const current = this.storage.pop();
        if (current == this.maxStorage.peek()) {
            return this.maxStorage.pop();
        }
        return current;
    }

    peek() {
        return this.storage.peek();
    }

    getMax() {
        return this.maxStorage.peek();
    }
}

const maxStack = new MaxStack();
maxStack.push(3);
maxStack.push(5);
maxStack.push(19);
maxStack.push(12);
console.log(maxStack.storage);
console.log(maxStack.maxStorage);
const peekItem = maxStack.peek();
console.log(peekItem); // 12
console.log(maxStack.getMax()); // 19
const popItem = maxStack.pop();
console.log(popItem); // 12
console.log(maxStack.peek()); // 19
console.log(maxStack.getMax()); // 19
maxStack.pop();
console.log(maxStack.getMax()); // 5