function solveStockProfit(input) {
  const T = parseInt(input[0]);
  let line = 1;

  for (let t = 0; t < T; t++) {
    const N = parseInt(input[line++]);
    const prices = input[line++].split(" ").map(Number);

    let maxPrice = 0;
    let profit = 0;

    for (let i = N - 1; i >= 0; i--) {
      if (prices[i] > maxPrice) {
        maxPrice = prices[i];
      } else {
        profit += maxPrice - prices[i];
      }
    }

    console.log(profit);
  }
}

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
solveStockProfit(input);
