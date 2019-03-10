const matrixspiral = (arr) => {
    let totalRow = arr.length;
    let totalCol = arr[0].length;
    let topRow = 0;
    let bottomRow = totalRow - 1;
    let leftCol = 0;
    let rightCol = totalCol - 1;
    const copy = [];
    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let j = leftCol; j <= rightCol; j++) {
            copy.push(arr[topRow][j]);
        }
        topRow++;
        for (let i = topRow; i <= bottomRow; i++) {
            copy.push(arr[i][rightCol]);
        }
        rightCol--;
        if (topRow <= bottomRow) {
            for (let j = rightCol; j >= leftCol; j--) {
                copy.push(arr[bottomRow][j]);
            }
            bottomRow--;
        }
        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                copy.push(arr[i][leftCol]);
            }
            leftCol++;
        }
    }
    return copy;
}

const inputMatrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
console.log(matrixspiral(inputMatrix));