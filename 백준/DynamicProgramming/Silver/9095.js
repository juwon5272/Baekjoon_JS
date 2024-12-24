const [T, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const DP = new Array(11).fill(0);
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i = 4; i < 11; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

const answer = [];
input.map((e) => answer.push(DP[e]));

console.log(answer.join("\n"));
