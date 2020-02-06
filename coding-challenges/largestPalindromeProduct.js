const isPalindrome = (n) => {
    return (n + '') === n.toString(10).split('').reverse().join('')
}

const largestPalindromeProduct = () => {
    let result = 0;
    for (let i = 999; i > 99; i--) {
        for (let j = i - 1; j > 99; j--) {
            if (isPalindrome(i * j) && result < i * j) {
                result = i * j;
                break;
            }
        }
    }
    return result;
}

console.log(largestPalindromeProduct());