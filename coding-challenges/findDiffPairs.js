const findDiffPairs = (arr, diff) => {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i] + diff] !== undefined) {
            console.log(`(${arr[i]}, ${arr[i] + diff})`);
        }
        if (hash[arr[i] - diff] !== undefined) {
            console.log(`(${arr[i]}, ${arr[i] - diff})`)
        } else {
            hash[arr[i]] = i;
        }
    }
}

const arr = [1, 7, 5, 9, 2, 12, 3];
let diff = 2;
console.log(findDiffPairs(arr, diff));