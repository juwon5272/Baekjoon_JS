const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const minHeap = input.sort((a, b) => a - b);
let totalSum = 0;

while (minHeap.length > 1) {
  const min1 = minHeap.shift();
  const min2 = minHeap.shift();
  const sum = min1 + min2;
  totalSum += sum;

  let inserted = false;
  for (let i = 0; i < minHeap.length; i++) {
    if (minHeap[i] > sum) {
      minHeap.splice(i, 0, sum);
      inserted = true;
      break;
    }
  }
  if (!inserted) minHeap.push(sum);
}

console.log(totalSum);
