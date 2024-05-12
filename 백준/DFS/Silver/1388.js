let [cnt, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let [N, M] = cnt.split(" ");
let total = 0;
for (let i = 0; i < N; i++) {
  let deco = input[i].split("|").filter((e) => e.length);
  total += deco.length;
}
for (let j = 0; j < M; j++) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[i][j]);
  }
  let deco = arr
    .join("")
    .split("-")
    .filter((e) => e.length);
  total += deco.length;
}

console.log(total);
