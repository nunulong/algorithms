const isPrime = (n) => {
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}

const summationOfPrimes = (n) => {
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            result += i;
        }
    }
    return result;
}

console.log(summationOfPrimes(2000000));