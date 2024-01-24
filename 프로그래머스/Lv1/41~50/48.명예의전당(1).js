// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let arr = [];
  let answer = [];
  for (let x of score) {
    arr.push(x);
    arr.sort((a, b) => b - a);
    if (arr.length > k) arr.pop();
    answer.push(arr[arr.length - 1]);
  }
  return answer;
}
