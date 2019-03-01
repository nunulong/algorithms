class RingBuffer {
    constructor(length) {
        this.length = length
        this.storage = []
    }

    append(value) {
        const element = { 'val': value, 'age': 0 }
        if (this.storage.length < this.length) {
            this.storage.forEach(element => {
                element.age += 1
            })
            this.storage.push(element)
        } else {
            this.storage.forEach(element => {
                if (element.age === this.length - 1) {
                    element.val = value
                    element.age = 0
                } else {
                    element.age += 1
                }
            })
        }
    }

    allValues() {
        this.storage.sort((a, b) => {
            return b.age - a.age
        })
        return this.storage.map(element => {
            return element.val
        })
    }
}

const buffer = new RingBuffer(3);
buffer.append('a');
buffer.append('b');
buffer.append('c');
console.log(buffer.storage)
console.log(buffer.allValues());   // should return ['a', 'b', 'c']
buffer.append('d');
console.log(buffer.storage)
console.log(buffer.allValues());   // should return ['d', 'b', 'c']
buffer.append('e');
buffer.append('f');
console.log(buffer.storage)
console.log(buffer.allValues());
