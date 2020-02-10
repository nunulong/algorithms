const sumOfSquare = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += Math.pow(i, 2);
    }
    return result;
}

const squareOfSum = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return Math.pow(result, 2);
}

const sumSquareDifference = (n) => {
    return squareOfSum(n) - sumOfSquare(n);
}

console.log(sumSquareDifference(100));