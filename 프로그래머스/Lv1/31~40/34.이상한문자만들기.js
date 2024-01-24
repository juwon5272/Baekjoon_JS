// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let arr = s.split(" ");
  let answer = [];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      if (i % 2) answer.push(arr[j][i].toLowerCase());
      else answer.push(arr[j][i].toUpperCase());
    }
    if (j < arr.length - 1) {
      answer.push(" ");
    }
  }
  return answer.join("");
}
