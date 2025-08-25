// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const MOD = 1234567;
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let tmp = (a + b) % MOD;
    [a, b] = [b, tmp];
  }
  return b;
}
