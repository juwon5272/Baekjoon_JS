// https://www.acmicpc.net/problem/11508

// const [n, ...input] = require("fs")
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((e) => +e);
// let product = input.sort((a, b) => b - a);
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   if (i % 3 != 2) sum += product[i];
// }
// console.log(sum);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, ...prices] = input;
  function solution(n, prices) {
    let answer = 0;
    const sorted = prices.map((i) => Number(i)).sort((a, b) => b - a);
    for (let i = 0; i < n; i += 1) {
      // if ((i + 1) % 3 === 0) continue;
      // answer += sorted[i];
      if (i % 3 != 2) answer += sorted[i];
    }
    return answer;
  }
  const answer = solution(n, prices);
  console.log(answer);
  process.exit();
});
