// https://www.acmicpc.net/problem/3273

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((e) => +e);

let N = input.shift();
let X = input.pop();
let ingredient = input.sort((a, b) => a - b);
let cnt = 0;
let left = 0;
let right = ingredient.length - 1;
while (left < right) {
  if (ingredient[left] + ingredient[right] == X) {
    ingredient.splice(right, 1);
    ingredient.splice(left, 1);
    left = 0;
    right = ingredient.length - 1;
    cnt++;
  } else if (ingredient[left] + ingredient[right] > X) {
    right--;
  } else {
    left++;
  }
}

console.log(cnt);
