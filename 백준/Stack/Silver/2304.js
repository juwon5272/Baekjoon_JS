// https://www.acmicpc.net/problem/2304

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
let maxHeight = 0;
let maxIdx = 0;
let [leftMaxH, leftMaxW, leftVolume] = [0, 0, 0];
let [rightMaxH, rightMaxW, rightVolume] = [0, 0, 0];
input.sort((a, b) => a[0] - b[0]);
input.map((e, idx) => {
  if (maxHeight < e[1]) {
    maxHeight = e[1];
    maxIdx = idx;
  }
});
for (let i = 0; i < maxIdx; i++) {
  if (input[i][1] > leftMaxH && i !== maxIdx) {
    leftMaxH = input[i][1];
  }
  leftMaxW = input[i + 1][0] - input[i][0];
  leftVolume += leftMaxW * leftMaxH;
}

for (let i = N - 1; i > maxIdx; i--) {
  if (input[i][1] > rightMaxH) {
    rightMaxH = input[i][1];
  }
  rightMaxW = input[i][0] - input[i - 1][0];
  rightVolume += rightMaxW * rightMaxH;
}
console.log(leftVolume + maxHeight + rightVolume);
