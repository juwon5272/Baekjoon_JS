//school.programmers.co.kr/learn/courses/30/lessons/134240

https: function solution(food) {
  var answer = "";
  let arr = [0];
  for (let i = food.length - 1; i > 0; i--) {
    arr.push(String(i).repeat(Math.floor(food[i] / 2)));
    arr.unshift(String(i).repeat(Math.floor(food[i] / 2)));
  }
  return arr.join("");
}
