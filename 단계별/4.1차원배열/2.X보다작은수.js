// https://www.acmicpc.net/problem/10871

const [a, b] = require("fs").readFileSync("./input.txt").toString().split("\n");
const [cnt, num] = a.split(" ");
const arr = b.split(" ");
let ans = [];
for (let i = 0; i < Number(cnt); i++) {
  if (Number(arr[i]) < Number(num)) ans.push(arr[i]);
}
console.log(ans.join(" "));
