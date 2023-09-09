const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

if (b >= 45) console.log(`${a} ${b - 45}`);
else if (a == 0) console.log(`23 ${15 + b}`);
else console.log(`${a - 1} ${15 + b}`);
