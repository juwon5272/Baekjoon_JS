// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// function solution(s) {
//     return s.split('').sort().reverse().join('');
// }

function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
      else return 0;
    })
    .join("");
}
