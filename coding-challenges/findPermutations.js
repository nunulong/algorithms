const findPermutations = (shortStr, longStr) => {
    const len = shortStr.length;
    const result = [];

    for (let i = 0; i <= longStr.length - len; i++) {
        let str = longStr.substring(i, i + len);
        let count = {};
        for (let i = 0; i < len; i++) {
            if (count[shortStr[i]] !== undefined) {
                count[shortStr[i]]++;
            } else {
                count[shortStr[i]] = 1;
            }
        }
        for (let i = 0; i < str.length; i++) {
            if (count[str[i]]) {
                count[str[i]]--;
            }
        }
        let values = Object.values(count);
        if (values.filter(x => x === 0).length === len) {
            result.push(str);
        }
    }
    return result;
}

const shortStr = 'ab';
const longStr = 'eidbaooo';
console.log(findPermutations(shortStr, longStr));