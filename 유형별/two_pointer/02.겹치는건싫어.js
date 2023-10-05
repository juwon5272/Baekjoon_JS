// https://www.acmicpc.net/problem/20922

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

const N = +input[0][0];
const X = +input[0][1];
const numbers = input[1].map((e) => Number(e));
let left = 0;
let right = 0;
let max = 0;

let room = new Map();

while (right < N) {
  if (!room.has(numbers[right])) {
    room.set(numbers[right], 1);
    if (max < right - left + 1) max = right - left + 1;
    right++;
  } else if (room.has(numbers[right]) && room.get(numbers[right]) < X) {
    room.set(numbers[right], room.get(numbers[right]) + 1);
    if (max < right - left + 1) max = right - left + 1;
    right++;
  } else if (room.has(numbers[right]) && room.get(numbers[right]) == X) {
    if (room.get(numbers[left]) == 1) {
      room.delete(numbers[left++]);
    } else room.set(numbers[left], room.get(numbers[left++]) - 1);
  }
}
console.log(max);
