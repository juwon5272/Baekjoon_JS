// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  let Arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      Arr.push("(");
    } else {
      if (Arr.length > 0) Arr.pop();
      else return false;
    }
  }

  return Arr.length == 0 ? true : false;
}

// function solution(s){
//     let count = 0;
//     for(let i=0;i<s.length;i++){
//         if(s[i]==="(") count++;
//         else {
//             if(count == 0) return false;
//             else count--;
//         }
//     }
//     return count==0;
// }
