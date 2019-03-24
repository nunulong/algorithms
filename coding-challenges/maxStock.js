const maxStock = (arr, k) => {
    if (arr.length < 2) return null;
    const proArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            proArr.push(arr[j] - arr[i]);
        }
    }
    proArr.sort((a, b) => a - b);
    if (proArr.length < k) return null;
    let result = 0;
    for (let i = proArr.length - 1; i >= proArr.length - k; i--) {
        result += proArr[i];
    }
    return result;
}

const arr = [5, 2, 4, 0, 1];
const k = 2;
console.log(maxStock(arr, k));