/*
You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

Example:

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

countVotes(votes);  // should return 'michael'
Analyze the time and space complexity of your solution.

*/

const countVotes = (arr) => {
    const obj = {};
    let maxVote = 0;
    let winner;
    arr.forEach(vote => {
        if (!obj[vote]) obj[vote] = 1;
        obj[vote]++;

        if (maxVote < obj[vote]) {
            maxVote = obj[vote];
            winner = vote;
        } else if (maxVote === obj[vote]) {
            if (vote > winner) winner = vote;
        }
    });
    return winner;
}

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael', 'alex', 'mary', 'michael'];
console.log(countVotes(votes));

