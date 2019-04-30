const nthFibonacci = (n) => {
    const cache = [];
    cache[0] = 0;
    cache[1] = 1;
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
}

console.time('start');
console.log(nthFibonacci(1000));
console.timeEnd('start');