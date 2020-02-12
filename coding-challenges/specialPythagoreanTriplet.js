const specialPythagoreanTriplet = () => {
    let a = 1;
    while (a < 1000) {
        for (let i = a + 1; i < 1000; i++) {
            let result = a * a + i * i;
            if (Number.isInteger(Math.sqrt(result)) && (Math.sqrt(result) + a + i === 1000)) {
                return a * i * Math.sqrt(result);
            }
        }
        a++;
    }
}

console.log(specialPythagoreanTriplet());