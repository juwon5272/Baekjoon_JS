const fs = require("fs");

const [N, K] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) =>
    e
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a)
  );

let result = -1; // 가능한 가장 큰 수를 저장할 변수

// 가능한 가장 큰 수를 찾는 함수
function findLargestPossible(num, idx) {
  // 기저 사례: 현재 구성된 수가 주어진 N을 넘어갈 때
  if (num > N) return;
  // 가능한 가장 큰 수인 경우 result 업데이트
  result = Math.max(result, num);

  // 주어진 집합 K의 원소들을 이용해 숫자를 구성하는 재귀 호출
  for (let i = 0; i < K.length; i++) {
    findLargestPossible(num * 10 + K[i], idx + 1);
  }
}

findLargestPossible(0, 0); // 함수 호출

console.log(result); // 결과 출력
