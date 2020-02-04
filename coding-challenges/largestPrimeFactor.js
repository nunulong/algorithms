const isPrime = (n) => {
    if (n <= 1) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    } else {
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}


const largestPrimeFactor = (n) => {
    if (n <= 1) {
        return "Error: there is no answer for the given number."
    } else if (isPrime(n)) {
        return n;
    } else {
        let result;
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0 && isPrime(i)) {
                result = i;
            }
        }
        return result;
    }
}

console.log(largestPrimeFactor(600851475143));