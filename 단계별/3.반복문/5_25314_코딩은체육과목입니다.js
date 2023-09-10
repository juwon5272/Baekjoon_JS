const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt"));
let type = "";

for (let i = 1; i <= input / 4; i++) type += "long ";

console.log(`${type}int`);
