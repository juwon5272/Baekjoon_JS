// https://www.acmicpc.net/problem/1026

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const A = input
  .shift()
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);
const B = input
  .shift()
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => b - a);
let sum = 0;

A.map((_, idx) => {
  sum += A[idx] * B[idx];
});

console.log(sum);
