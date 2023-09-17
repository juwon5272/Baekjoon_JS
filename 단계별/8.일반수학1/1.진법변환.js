// https://www.acmicpc.net/problem/2745

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let arr = input[0].split("");
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
    sum +=
      (arr[i].charCodeAt(0) - 55) * Number(input[1]) ** (arr.length - i - 1);
  } else {
    sum += Number(arr[i]) * Number(input[1]) ** (arr.length - i - 1);
  }
}

console.log(sum);
