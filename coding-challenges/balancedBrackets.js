const balancedBrackets = (str) => {
    const cache = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '{') {
            cache.push(str[i]);
        } else if (str[i] == ']' && cache.pop() != '[') {
            return false;
        } else if (str[i] == ')' && cache.pop() != '(') {
            return false;
        } else if (str[i] == '}' && cache.pop() != '{') {
            return false;
        }
    }
    return cache.length === 0;
};

const str1 = '[({}}]';
const str2 = '[{[()]}]';
const str3 = '[]{}()';
console.log(balancedBrackets(str1));
console.log(balancedBrackets(str2));
console.log(balancedBrackets(str3));
