// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  let answer = [];
  for (let x of commands) {
    let arr = array.slice(x[0] - 1, x[1]);
    arr = arr.sort((a, b) => a - b);
    answer.push(arr[x[2] - 1]);
  }
  return answer;
}
