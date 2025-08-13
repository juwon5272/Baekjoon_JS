const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
let t = parseInt(input[0]);
let idx = 1;
let result = [];

for (let i = 0; i < t; i++) {
  let n = parseInt(input[idx++]);
  let clothes = {};

  for (let j = 0; j < n; j++) {
    let [name, type] = input[idx++].split(" ");
    if (clothes[type]) {
      clothes[type]++;
    } else {
      clothes[type] = 1;
    }
  }

  let count = 1;
  for (let type in clothes) {
    count *= clothes[type] + 1;
  }

  result.push(count - 1);
}

console.log(result.join("\n"));
