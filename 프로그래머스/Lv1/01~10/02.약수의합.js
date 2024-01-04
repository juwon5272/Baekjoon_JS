// https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript

function solution(n) {
  var answer = 0;
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum + n;
}
