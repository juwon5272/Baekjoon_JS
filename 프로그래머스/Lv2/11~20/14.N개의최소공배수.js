// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  return arr.reduce((acc, cur) => lcm(acc, cur));
}
