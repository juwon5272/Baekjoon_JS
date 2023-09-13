// https://www.acmicpc.net/problem/2444

let input = Number(require("fs").readFileSync("./input.txt").toString().trim());

for (let i = 1; i <= 2 * input - 1; i++) {
  let spaces = Math.abs(input - i);
  let stars = 2 * input - 1 - 2 * spaces;
  console.log(" ".repeat(spaces) + "*".repeat(stars));
}
