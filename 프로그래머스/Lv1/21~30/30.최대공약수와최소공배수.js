// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let answer = [];
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}
function gcd(minNum, maxNum) {
  //유클리드 호제법
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}
