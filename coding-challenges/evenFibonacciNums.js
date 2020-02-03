// const evenFibonacciNums = () => {
//     const store = [];
//     store[0] = 1;
//     store[1] = 2;
//     for (let i = 2; ; i++) {
//         store[i] = store[i - 1] + store[i - 2];
//         if (store[i] > 4000000) {
//             store.pop();
//             break;
//         }
//     }

//     let sum = 0;
//     for (let x = 0; x < store.length; x++) {
//         if (store[x] % 2 == 0) {
//             sum += store[x];
//         }
//     }
//     return sum;
// }
// console.time("start");
// console.log(evenFibonacciNums());
// console.timeEnd("start");


const evenFibonacciNums = () => {
    let x = 1;
    let y = 1;
    let z = 0;
    let sum = 0;
    while (x + y < 4000000) {
        z = x + y;
        x = y;
        y = z;
        if (z % 2 == 0) {
            sum += z;
        }
    }
    return sum;
}
console.time("start");
console.log(evenFibonacciNums());
console.timeEnd("start");
