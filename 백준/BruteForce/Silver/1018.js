let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const NM = input.shift().split(" ");
const N = Number(NM.shift());
const M = Number(NM.shift());
const cntArr = [];

const whiteFirstBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackFirstBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function paintWhiteFirst(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== whiteFirstBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
}

function paintBlackFirst(x, y) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== blackFirstBoard[i - y][j - x]) {
        count++;
      }
    }
  }

  return count;
}

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    cntArr.push(paintWhiteFirst(j, i));
    cntArr.push(paintBlackFirst(j, i));
  }
}

console.log(Math.min(...cntArr));
