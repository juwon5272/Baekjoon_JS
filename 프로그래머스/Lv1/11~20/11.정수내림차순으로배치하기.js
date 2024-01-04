// https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&levels=1&languages=javascript

function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
