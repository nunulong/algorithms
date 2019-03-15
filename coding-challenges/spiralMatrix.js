inputMatrix1 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
]

inputMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

const spiralMatrix = (matrix) => {
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let rightColumn = matrix[0].length - 1;
    let leftColumn = 0;
    const result = [];

    while (topRow <= bottomRow && leftColumn <= rightColumn) {
        if (topRow <= bottomRow) {
            for (let i = leftColumn; i <= rightColumn; i++) {
                result.push(matrix[topRow][i]);
            }
        }
        topRow++;
        if (leftColumn <= rightColumn) {
            for (let i = topRow; i <= bottomRow; i++) {
                result.push(matrix[i][rightColumn]);
            }
        }
        rightColumn--;
        if (topRow <= bottomRow) {
            for (let i = rightColumn; i >= leftColumn; i--) {
                result.push(matrix[bottomRow][i]);
            }
        }
        bottomRow--;
        if (topRow <= bottomRow) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(matrix[i][leftColumn]);
            }
        }
        leftColumn++;
    }
    return result;
}

console.log(spiralMatrix(inputMatrix));

