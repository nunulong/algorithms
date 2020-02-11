const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}

const nthPrime = (n) => {
    let count = 0;
    for (let i = 0; ; i++) {
        if (isPrime(i)) {
            count++;
            if (count == n) {
                return i;
            }
        }
    }
}

console.log(nthPrime(10001));