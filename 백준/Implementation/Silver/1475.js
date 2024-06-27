// https://www.acmicpc.net/problem/1475

const input = require("fs").readFileSync("./input.txt").toString().trim();
let arr = Array.from({ length: 10 }, () => 0);
for (let i = 0; i < input.length; i++) {
  if (input[i] == 9) arr[6]++;
  else arr[input[i]]++;
}
arr[6] = Math.ceil(arr[6] / 2);
console.log(Math.max(...arr));
