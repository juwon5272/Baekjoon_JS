// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}
