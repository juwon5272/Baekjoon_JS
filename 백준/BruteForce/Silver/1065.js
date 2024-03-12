// https://www.acmicpc.net/problem/1065
let N = +require("fs").readFileSync("./input.txt");
let cnt = 0;
if (N < 100) cnt = N;
else {
  cnt = 99;
  for (let i = 100; i <= N; i++) {
    let arr = i.toString().split("");
    if (arr[0] - arr[1] === arr[1] - arr[2]) cnt++;
  }
}

console.log(cnt);
