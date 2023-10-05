let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

let i = 0;
let j = 0;
let ans = [];

while (i < +input[0][0] && j < +input[0][1]) {
  if (+input[1][i] <= +input[2][j]) {
    ans.push(+input[1][i++]);
  } else {
    ans.push(+input[2][j++]);
  }
}

while (i < +input[0][0]) {
  ans.push(+input[1][i++]);
}

while (j < +input[0][1]) {
  ans.push(+input[2][j++]);
}

console.log(ans.join(" "));
