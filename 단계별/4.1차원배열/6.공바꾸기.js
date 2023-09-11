// https://www.acmicpc.net/problem/10813

let input = require("fs").readFileSync("./input.txt").toString().split("\n");
let [basket_num, num] = input[0].toString().split(" ");
let basket = [];
for (let i = 0; i < basket_num; i++) {
  basket.push(i + 1);
}
for (let i = 1; i <= num; i++) {
  let arr = input[i].split(" ").map(Number);
  [basket[arr[0] - 1], basket[arr[1] - 1]] = [
    basket[arr[1] - 1],
    basket[arr[0] - 1],
  ];
}

console.log(basket.join(" "));
