// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const wantMap = {};
  for (let i = 0; i < want.length; i++) {
    wantMap[want[i]] = number[i];
  }
  let answer = 0;
  let windowMap = {};
  for (let i = 0; i < 10; i++) {
    windowMap[discount[i]] = (windowMap[discount[i]] || 0) + 1;
  }

  function isMatch(map1, map2) {
    for (let key in map1) {
      if (map1[key] !== map2[key]) return false;
    }
    return true;
  }

  if (isMatch(wantMap, windowMap)) answer++;

  for (let i = 10; i < discount.length; i++) {
    let outItem = discount[i - 10];
    windowMap[outItem]--;
    if (windowMap[outItem] === 0) delete windowMap[outItem];
    let inItem = discount[i];
    windowMap[inItem] = (windowMap[inItem] || 0) + 1;

    if (isMatch(wantMap, windowMap)) answer++;
  }

  return answer;
}
