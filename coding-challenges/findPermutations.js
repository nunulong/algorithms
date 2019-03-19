const findPermutations = (shortStr, longStr) => {
    const len = shortStr.length;
    const result = [];
    const shortArr = shortStr.split('').sort().join('');
    for (let i = 0; i <= longStr.length - len; i++) {
        let str = longStr.substring(i, i + len);
        let strArr = str.split('').sort().join('');
        console.log(strArr, shortArr);
        if (strArr === shortArr) {
            result.push(str);
        }
    }
    return result;
}

const shortStr = 'ab';
const longStr = 'eidbaooo';
console.log(findPermutations(shortStr, longStr));