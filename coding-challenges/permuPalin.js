const permuPalin = (str) => {
    if (str.length === 0) return 'Error: String is empty';
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    const occur = Object.values(obj);
    const oddOccur = occur.filter(occ => {
        if (occ % 2 !== 0) {
            return occ;
        }
    });
    return oddOccur.length === 1 || oddOccur.length === 0;
}

console.log(permuPalin('abcacb'));