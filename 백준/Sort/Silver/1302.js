const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const map = new Map();

for (let title of input) {
  map.set(title, (map.get(title) || 0) + 1);
}
let maxCount = 0;
let bestSeller = "";

for (let [title, count] of map.entries()) {
  if (count > maxCount) {
    maxCount = count;
    bestSeller = title;
  } else if (count === maxCount && title < bestSeller) {
    bestSeller = title;
  }
}

console.log(bestSeller);
