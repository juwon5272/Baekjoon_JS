//school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

https: function solution(answers) {
  let answer = [];
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let [s1, s2, s3] = [0, 0, 0];

  answers.map((el, idx) => {
    if (el === p1[idx % 5]) {
      s1++;
    }
    if (el === p2[idx % 8]) {
      s2++;
    }
    if (el === p3[idx % 10]) {
      s3++;
    }
  });

  Math.max(s1, s2, s3) == s1 ? answer.push(1) : "";
  Math.max(s1, s2, s3) == s2 ? answer.push(2) : "";
  Math.max(s1, s2, s3) == s3 ? answer.push(3) : "";

  return answer;
}
