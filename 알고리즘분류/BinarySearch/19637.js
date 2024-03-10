let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" "));
let [cnt, num] = input.shift();

console.log(cnt, num);
let pointArr = [];
for (let i = 0; i < cnt; i++) {
  pointArr.push();
}
