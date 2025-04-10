// https://www.acmicpc.net/problem/14888

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const numbers = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

function dfs(index, total, plus, minus, multiply, divide) {
  if (index === N) {
    max = Math.max(max, total);
    min = Math.min(min, total);
    return;
  }

  const num = numbers[index];

  if (plus > 0) {
    dfs(index + 1, total + num, plus - 1, minus, multiply, divide);
  }
  if (minus > 0) {
    dfs(index + 1, total - num, plus, minus - 1, multiply, divide);
  }
  if (multiply > 0) {
    dfs(index + 1, total * num, plus, minus, multiply - 1, divide);
  }
  if (divide > 0) {
    let result;
    if (total < 0) {
      result = -Math.floor(Math.abs(total) / num);
    } else {
      result = Math.floor(total / num);
    }
    dfs(index + 1, result, plus, minus, multiply, divide - 1);
  }
}

dfs(1, numbers[0], ...operators);

console.log(max);
console.log(min);
