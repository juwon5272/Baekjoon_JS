// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((acc, _, idx) => (acc += a[idx] * b[idx]), 0);
}
