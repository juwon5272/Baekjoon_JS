// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}
