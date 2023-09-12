// https://www.acmicpc.net/problem/2675

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let [cnt, word] = input[i].split(" ");
  word = word.split("").map((e) => e.repeat(cnt));
  console.log(word.join(""));
}
