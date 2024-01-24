// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let answer = "";
  let dayList = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let date = b;
  for (let i = 0; i < a - 1; i++) {
    date += monthArr[i];
  }
  answer = dayList[date % 7];
  return answer;
}
