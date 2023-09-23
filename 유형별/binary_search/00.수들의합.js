// https://www.acmicpc.net/problem/1789

let input = Number(require("fs").readFileSync("./input.txt"));
let i = 1;
let cnt = 0;
while (input >= i) {
  input -= i;
  i++;
  cnt++;
}
console.log(cnt);
