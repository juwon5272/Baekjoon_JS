// https://www.acmicpc.net/problem/2292

let input = Number(require("fs").readFileSync("./input.txt")) - 1;

let i = 1;
let cnt = 1;
while (input > 0) {
  input = input - 6 * i;
  i++;
  cnt++;
}
console.log(cnt);
