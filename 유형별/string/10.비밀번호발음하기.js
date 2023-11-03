// https://www.acmicpc.net/problem/4659

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let consonantCnt = 0;
let doubleCnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 1; j < input[i].length; j++) {
    if (input[i][j] == ("a" || "e" || "i" || "o" || "u")) {
      consonantCnt = 0;
    } else {
      consonantCnt++;
    }
    if (
      input[i][j] == input[i][j - 1] &&
      input[i][j] !== ("e" || "o") &&
      j > 0
    ) {
    }
  }
}
