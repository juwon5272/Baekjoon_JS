const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt"));

for (let i = 1; i < 10; i++) console.log(`${input} * ${i} = ${i * input}`);
