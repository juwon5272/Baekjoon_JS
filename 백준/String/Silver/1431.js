const [N, ...serials] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

serials.sort((a, b) => {
  let aSum = a
    .split("")
    .filter((char) => char >= "0" && char <= "9")
    .reduce((sum, digit) => sum + Number(digit), 0);

  let bSum = b
    .split("")
    .filter((char) => char >= "0" && char <= "9")
    .reduce((sum, digit) => sum + Number(digit), 0);

  if (a.length !== b.length) return a.length - b.length;
  if (aSum !== bSum) return aSum - bSum;
  return a.localeCompare(b);
});

console.log(serials.join("\n"));
