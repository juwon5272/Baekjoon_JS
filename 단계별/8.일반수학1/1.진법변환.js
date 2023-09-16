// https://www.acmicpc.net/problem/2745

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

let arr = input[0].split("");
let sum = 0;
for (let i = 0; i < input[0].length; i++) {
  if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
    sum +=
      (arr[i].charCodeAt(0) - 55) *
      Number(input[1]) ** (input[0].length - i - 1);
  } else {
    sum += Number(input[0]) * Number(input[1]) ** (input[0].length - i - 1);
  }
}
console.log(sum);
