const findMaxProfit = (arr) => {
    let buy = arr[0];
    let sell = arr[1];
    for (let i = 0; i < arr.length - 1; i++) {
        buy = Math.min(buy, arr[i]);
        sell = Math.max(sell, arr[i + 1]);
        if (arr.indexOf(buy) > arr.indexOf(sell)) {
            buy = arr[arr.indexOf(buy)];
            sell = arr[arr.indexOf(buy) + 1];
        }
    }
    return sell - buy > 0 ? sell - buy : 0;
};

const arr = [5, 9, 6, 2, 4, 8, 3, 1];
console.log(findMaxProfit(arr));