// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  while (a <= n) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
}
