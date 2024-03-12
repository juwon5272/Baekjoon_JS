// https://www.acmicpc.net/problem/7568

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
let personData = input.map((e) => e.split(" ").map((e) => +e));
let rankArr = [];
for (let i = 0; i < N; i++) {
  let rank = 1;
  for (let j = 0; j < N; j++) {
    if (
      personData[i][0] < personData[j][0] &&
      personData[i][1] < personData[j][1]
    ) {
      rank++;
    }
  }
  rankArr.push(rank);
}
console.log(rankArr.join(" "));
