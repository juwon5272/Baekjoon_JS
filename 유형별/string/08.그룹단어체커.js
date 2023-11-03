// https://www.acmicpc.net/problem/1316

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let answer = 0;

for (let i = 0; i < N; i++) {
  let cnt = 1;
  let alphabetArr = [input[i][0]];
  for (let j = 1; j < input[i].length; j++) {
    if (input[i][j] !== input[i][j - 1] && alphabetArr.includes(input[i][j])) {
      cnt = 0;
      break;
    } else if (input[i][j] !== input[i][j - 1]) {
      alphabetArr.push(input[i][j]);
    }
  }
  answer += cnt;
}
console.log(answer);
