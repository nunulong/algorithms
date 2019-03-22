const squareRoot = (num) => {
    let i = 0;
    while (i * i < num) {
        i++;
    }
    if (i * i == num) {
        return i;
    } else {
        i -= 1;
        let root = (num / i + i) / 2;
        while (Math.abs(num - root * root) > 0.0000001) {
            root = (num / root + root) / 2;
        }
        return root.toFixed(3);
    }

}

console.log(squareRoot(2));