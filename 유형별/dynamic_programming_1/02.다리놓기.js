// https://www.acmicpc.net/problem/1010

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

let cnt = +input[0];

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

for (let i = 1; i <= cnt; i++) {
  let west = +input[i].split(" ")[0];
  let east = +input[i].split(" ")[1];
  let ans = factorial(east) / (factorial(west) * factorial(east - west));
  console.log(Math.round(ans));
}
