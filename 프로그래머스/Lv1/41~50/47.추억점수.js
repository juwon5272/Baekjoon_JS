// https://school.programmers.co.kr/learn/courses/30/lessons/176963

// function solution(name, yearning, photo) {
//   return photo.map((v) =>
//     v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
//   );
// }

function solution(name, yearning, photo) {
  let answer = [];
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      score += yearning[name.indexOf(photo[i][j])] ?? 0;
    }
    answer.push(score);
  }
  return answer;
}
