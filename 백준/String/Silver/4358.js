const trees = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const map = new Map();
const total = trees.length;

for (let tree of trees) {
  map.set(tree, (map.get(tree) || 0) + 1);
}

const result = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

let output = [];
for (const [tree, count] of result) {
  const percent = ((count / total) * 100).toFixed(4);
  output.push(`${tree} ${percent}`);
}

console.log(output.sort().join("\n"));
