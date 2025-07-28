const [NM, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);

const passwordObj = {};
for (let i = 0; i < N; i++) {
  const [site, pw] = input[i].split(" ");
  passwordObj[site] = pw;
}

const result = [];
for (let i = N; i < N + M; i++) {
  result.push(passwordObj[input[i]]);
}

console.log(result.join("\n"));
