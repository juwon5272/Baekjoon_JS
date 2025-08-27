// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  function isParentheses(str) {
    let stack = [];
    const pairs = { ")": "(", "}": "{", "]": "[" };

    for (let ch of str) {
      if (ch === "(" || ch === "{" || ch === "[") {
        stack.push(ch);
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== pairs[ch]) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }

  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isParentheses(rotated)) answer++;
  }

  return answer;
}
