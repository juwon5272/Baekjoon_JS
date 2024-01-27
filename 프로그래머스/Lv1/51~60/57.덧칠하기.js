// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// function solution(n, m, section) {
//     let answer = 0;
//     let part = 0;
//     section.forEach((n) => {
//       if (n > part) {
//         part = n + m - 1;
//         answer++;
//       }
//     });
//     return answer;
//   }

function solution(n, m, section) {
  let painted = 0;
  let answer = 0;
  for (let x of section) {
    if (x > painted) {
      answer++;
      painted = x + m - 1;
    }
  }
  return answer;
}
