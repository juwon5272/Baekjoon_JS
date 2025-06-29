function getMinBribes(input) {
  const [n, ...votes] = input.map(Number);
  let dasom = votes[0];
  const others = votes.slice(1);

  let bribes = 0;

  while (Math.max(...others) >= dasom) {
    let maxIndex = others.indexOf(Math.max(...others));

    others[maxIndex] -= 1;
    dasom += 1;
    bribes += 1;
  }

  console.log(bribes);
}

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
getMinBribes(input);
