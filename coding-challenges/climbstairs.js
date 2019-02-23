const climbStairs = (n) => {
    const helper = (i, n, arr) => {
        if (i > n) return 0;
        if (i === n) return 1;
        if (arr[i] > 0) return arr[i];
        arr[i] = helper(i + 1, n, arr) + helper(i + 2, n, arr);
        return arr[i];
    }
    const arr = [];
    return helper(0, n, arr);
}

console.log(climbStairs(4));