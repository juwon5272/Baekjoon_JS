const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);
const b_hun = Math.floor(b / 100);
const b_ten = Math.floor((b % 100) / 10);
const b_one = b % 10;

console.log(a * b_one);
console.log(a * b_ten);
console.log(a * b_hun);
console.log(a * b);
