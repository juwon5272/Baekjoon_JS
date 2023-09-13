let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

let original = [1, 1, 2, 2, 2, 8];
let arr = [];
for (let i = 0; i < 6; i++) {
  arr.push(original[i] - Number(input[i]));
}
console.log(arr.join(" "));
