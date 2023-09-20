// https://www.acmicpc.net/problem/9506

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => Number(e));

for (let i = 0; i < input.length - 1; i++) {
  let sum = [];
  let ans = 0;
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j == 0) {
      sum.push(j);
    }
  }
  sum.map((e) => (ans += e));
  if (ans == input[i]) {
    console.log(`${ans} = ${sum.join(" + ")}`);
  } else {
    console.log(input[i] + " is NOT perfect.");
  }
}
