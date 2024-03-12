// https://www.acmicpc.net/problem/1316

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

let cnt = input[0];
let alphabet = new Array(26).fill(0);
let ans = 0;
let isGroup = 1;

for (let i = 1; i <= cnt; i++) {
  let arr = input[i].split("");
  for (let j = 0; j < input[i].length; j++) {
    if (
      alphabet[input[i][j].charCodeAt(0) - 97] == 0 ||
      input[i][j] == input[i][j - 1]
    ) {
      alphabet[input[i][j].charCodeAt(0) - 97]++;
    } else {
      isGroup = 0;
    }
  }
}

console.log(alphabet);
