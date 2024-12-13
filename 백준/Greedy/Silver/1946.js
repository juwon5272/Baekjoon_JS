// https://www.acmicpc.net/problem/1946

const [T, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let inputArr = [];
let currentIndex = 0;

for (let i = 0; i < +T; i++) {
  const N = +input[currentIndex];
  currentIndex++;

  const applicants = input
    .slice(currentIndex, currentIndex + N)
    .map((line) => line.split(" ").map(Number));
  currentIndex += N;

  inputArr.push(applicants);
}

inputArr = inputArr.map((e) => e.sort((a, b) => a[0] - b[0]));
let cntWorkerArr = [];

for (let i = 0; i < T; i++) {
  let lowInterview = inputArr[i][0][1];
  let cntWorker = 1;
  for (let j = 1; j < inputArr[i].length; j++) {
    if (inputArr[i][j][1] < lowInterview) {
      cntWorker++;
      lowInterview = inputArr[i][j][1];
    }
  }
  cntWorkerArr.push(cntWorker);
}

console.log(cntWorkerArr.join("\n"));
