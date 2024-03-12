// https://www.acmicpc.net/problem/6550

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let answer = [];
for (let i = 0; i < input.length; i++) {
  let [s, t] = input[i].split(" ");
  let k = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[k] == t[j]) {
      if (k == s.length - 1) {
        answer.push("Yes");
        break;
      }
      k++;
    }
    if (j == t.length - 1) answer.push("No");
  }
}
answer.forEach((e) => console.log(e));
