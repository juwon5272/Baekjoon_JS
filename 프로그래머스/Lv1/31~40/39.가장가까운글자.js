// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let stack = [];
  let answer = [];
  let sSplit = s.split("");
  for (let i = 0; i < sSplit.length; i++) {
    if (stack.includes(sSplit[i]))
      answer.push(i - stack.lastIndexOf(sSplit[i]));
    else answer.push(-1);
    stack.push(sSplit[i]);
  }
  return answer;
}
