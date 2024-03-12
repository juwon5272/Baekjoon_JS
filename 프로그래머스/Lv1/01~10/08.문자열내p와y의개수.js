// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = true;

    let pCount = s.toUpperCase().split('P').length;
    let yCount = s.toUpperCase().split('Y').length;

    return pCount===yCount?true:false;
}