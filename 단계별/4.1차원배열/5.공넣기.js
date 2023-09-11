// https://www.acmicpc.net/problem/10810

let input = require("fs").readFileSync("./input.txt").toString().split("\n");
let [basket_num, num] = input[0].toString().split(" ");
let basket = [];
for (let i = 0; i < basket_num; i++) {
  basket.push(0);
}
for (let i = 1; i <= num; i++) {
  let arr = input[i].split(" ").map(Number);
  for (let j = arr[0]; j <= arr[1]; j++) basket[j - 1] = arr[2];
}

console.log(basket.join(" "));
