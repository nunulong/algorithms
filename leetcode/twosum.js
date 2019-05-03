const twoSum = (numbers, target) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        let pairIndex = numbers.indexOf(target - numbers[i]);
        if (pairIndex !== i && result.indexOf(i) == -1 && numbers[pairIndex] + numbers[i] == target) {
            result.push(i, pairIndex);
        }
    }
}

const arr = [3, 2, 4];
console.log(twoSum(arr, 6));