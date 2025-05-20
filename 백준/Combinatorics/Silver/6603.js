const input = require("fs").readFileSync("./input.txt").toString().split(`\n`);
input.pop();
const result = [];

for (const line of input) {
  const numbers = line.split(" ").map(Number);
  const k = numbers[0];
  const s = numbers.slice(1);

  function getCombinations(arr, r) {
    if (r === 0) return [[]];
    if (arr.length < r) return [];
    const [first, ...rest] = arr;
    const withFirst = getCombinations(rest, r - 1).map((comb) => [first, ...comb]);
    const withoutFirst = getCombinations(rest, r);

    return withFirst.concat(withoutFirst);
  }

  const combinations = getCombinations(s, 6).map((comb) => comb.join(" "));
  result.push(combinations.join("\n"));
}

console.log(result.join("\n\n"));
