const minJumps = (arr) => {

    const helper = (arr, start, end) => {
        let min = Number.POSITIVE_INFINITY;
        if (start === end) return 0;
        if (arr[start] === 0) return Number.POSITIVE_INFINITY;
        for (let i = start + 1; i < end + 1; i++) {
            if (i < start + arr[start] + 1) {
                const jumps = helper(arr, i, end);
                if (jumps != Number.POSITIVE_INFINITY && jumps + 1 < min) {
                    min = jumps + 1;
                }
            }
        }
        return min;
    }
    return helper(arr, 0, arr.length - 1);
}

const arr = [1, 3, 6];

console.log(minJumps(arr));