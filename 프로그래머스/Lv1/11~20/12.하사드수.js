// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let numberSum = 0;
  String(x)
    .split("")
    .map((e) => (numberSum += Number(e)));
  return x % numberSum ? false : true;
}
