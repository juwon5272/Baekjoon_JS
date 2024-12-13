// https://www.acmicpc.net/problem/1049

const [NM, ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ");
const priceArr = arr.map((e) => e.split(" ").map((e) => +e));
let minSix = 1000;
let minOne = 1000;

for (let i = 0; i < M; i++) {
  minSix = Math.min(minSix, priceArr[i][0]);
  minOne = Math.min(minOne, priceArr[i][1]);
}
minSix = Math.min(minSix, minOne * 6);

console.log(
  Math.min(minSix * Math.floor(N / 6) + minOne * (N % 6), minSix * Math.ceil(N / 6))
);
