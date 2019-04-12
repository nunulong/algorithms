/*
You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

Example:

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

countVotes(votes);  // should return 'michael'
Analyze the time and space complexity of your solution.

*/

const countVotes = (arr) => {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let maxCount = 0;
    for (name in obj) {
        if (obj[name] > maxCount) {
            maxCount = obj[name];
        }
    }
    let winner;
    for (name in obj) {
        if (obj[name] === maxCount) {
            if (winner === undefined || winner < name) {
                winner = name;
            }
        }
    }
    return winner;
}

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael', 'alex', 'mary', 'michael'];
console.log(countVotes(votes));

