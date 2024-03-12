// https://www.acmicpc.net/problem/1940

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((e) => +e);

let N = input.shift();
let M = input.shift();
let ingredient = input.sort((a, b) => a - b);
let cnt = 0;
let left = 0;
let right = ingredient.length - 1;
while (left < right) {
  if (ingredient[left] + ingredient[right] == M) {
    ingredient.splice(right, 1);
    ingredient.splice(left, 1);
    left = 0;
    right = ingredient.length - 1;
    cnt++;
  } else if (ingredient[left] + ingredient[right] > M) {
    right--;
  } else {
    left++;
  }
}

console.log(cnt);
