const mergingpackages = (arr, limit) => {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[limit - arr[i]] !== undefined) {
            return [i, hash[limit - arr[i]]];
        } else {
            hash[arr[i]] = i;
        }
    }
    return [];
}

const arr = [12, 6, 7, 14, 19, 3, 0, 25, 40];
const limit = 7;
console.log(mergingpackages(arr, limit));