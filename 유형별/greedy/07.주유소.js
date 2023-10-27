// https://www.acmicpc.net/problem/13305

const [n, d, p] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let distance = d.split(" ").map((e) => BigInt(e));
let price = p.split(" ").map((e) => BigInt(e));
let min = price[0];
let total = 0n;
for (let i = 0; i < distance.length; i++) {
  //   min = Math.min(min, price[i]);
  if (min > price[i]) min = price[i];
  total += min * distance[i];
}
console.log(String(total));
