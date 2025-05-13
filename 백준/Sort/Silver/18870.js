// https://www.acmicpc.net/problem/18870

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0], 10);
const coordinates = input[1].split(" ").map(Number);

function compressCoordinates(coords) {
  const sorted = Array.from(new Set(coords)).sort((a, b) => a - b);
  const coordMap = new Map();
  sorted.forEach((value, index) => {
    coordMap.set(value, index);
  });
  return coords.map((coord) => coordMap.get(coord));
}

const compressed = compressCoordinates(coordinates);

console.log(compressed.join(" "));
