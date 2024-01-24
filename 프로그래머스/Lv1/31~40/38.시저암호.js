// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  var answer = "";
  let splitS = s.split("");
  let arr = [];
  for (let x of s) {
    let charCode = x.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      charCode += n;
      if (charCode > 90) charCode -= 26;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode += n;
      if (charCode > 122) charCode -= 26;
    }
    arr.push(String.fromCharCode(charCode));
  }
  return arr.join("");
}
