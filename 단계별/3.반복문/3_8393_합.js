const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt"));
let sum = 0;

for (let i = 1; i <= input; i++) sum += i;

console.log(sum);
