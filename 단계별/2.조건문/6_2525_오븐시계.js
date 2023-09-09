const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const now = input[0].toString().split(" ");
const now_hour = Number(now[0]);
const now_min = Number(now[1]);
const time = Number(input[1]);

let result_hour = now_hour;
let result_min = now_min + time;

if (result_min >= 60) {
  result_hour += Math.floor(result_min / 60);
  result_min %= 60;
}

if (result_hour >= 24) {
  result_hour %= 24;
}

console.log(`${result_hour} ${result_min}`);
