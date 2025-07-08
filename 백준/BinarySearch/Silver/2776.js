const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

let line = 0;
const T = Number(input[line++]);

for (let t = 0; t < T; t++) {
  const N = Number(input[line++]);
  const memo1 = new Set(input[line++].split(" ").map(Number));
  const M = Number(input[line++]);
  const memo2 = input[line++].split(" ").map(Number);

  const result = memo2.map((num) => (memo1.has(num) ? 1 : 0));
  console.log(result.join("\n"));
}
