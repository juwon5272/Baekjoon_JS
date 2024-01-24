// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let dSort = d.sort((a, b) => a - b);
  let i = 0;
  while (budget - dSort[i] >= 0) {
    budget -= dSort[i];
    i++;
  }
  return i;
}
