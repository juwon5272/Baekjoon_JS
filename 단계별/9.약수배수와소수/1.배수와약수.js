// https://www.acmicpc.net/problem/5086

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

for (let i = 0; i < input.length - 1; i++) {
  let num = input[i].split(" ").map((e) => Number(e));
  let [A, B] = [num[0], num[1]];
  if (B % A == 0) {
    console.log("factor");
  } else if (A % B == 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
