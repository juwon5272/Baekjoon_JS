// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = [];
  let newArr1 = arr1.map((e) => e.toString(2).padStart(n, 0));
  let newArr2 = arr2.map((e) => e.toString(2).padStart(n, 0));
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (+newArr1[i][j] || +newArr2[i][j]) {
        arr.push("#");
      } else {
        arr.push(" ");
      }
    }
    answer.push(arr.join(""));
  }
  return answer;
}
