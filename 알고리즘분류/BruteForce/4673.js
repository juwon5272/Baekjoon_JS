// https://www.acmicpc.net/problem/4673
let numberArr = new Array(10001).fill(true);
let answer = [];

for (let i = 0; i < 10001; i++) {
  let sum = i;
  i.toString()
    .split("")
    .map((e) => (sum += Number(e)));
  numberArr[sum] = false;
}
for (let i = 1; i <= 10000; i++) {
  if (numberArr[i] == true) answer.push(i);
}
console.log(answer.join("\n"));
