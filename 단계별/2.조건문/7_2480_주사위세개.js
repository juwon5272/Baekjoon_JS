const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ");
let arr = [Number(input[0]), Number(input[1]), Number(input[2])].sort(
  (a, b) => b - a
);
let total = 0;
if (arr[1] == arr[0] && arr[1] == arr[2]) total = 10000 + 1000 * arr[1];
else if (arr[1] == arr[0] || arr[1] == arr[2]) total = 1000 + 100 * arr[1];
else total = 100 * arr[0];

console.log(total);
