const counter = () => {
    let count = 0;
    return function () {
        return count++;
    }
}

const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())