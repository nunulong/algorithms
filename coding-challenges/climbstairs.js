const climbStairs = (n) => {
    const helper = (n, cache) => {
        if (n < 0) return 0;
        if (n === 0) return 1;
        if (cache[n] > 0) return cache[n];
        cache[n] = helper(n - 1, cache) + helper(n - 2, cache) + helper(n - 3, cache);
        return cache[n];
    }
    const arr = [];
    return helper(n, arr);
}

console.log(climbStairs(30));