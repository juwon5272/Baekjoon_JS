const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const words = input.slice(1);

const map = new Map();

for (const word of words) {
  if (word.length >= M) map.set(word, (map.get(word) || 0) + 1);
}

const result = Array.from(map.entries());

result.sort((a, b) => {
  const [wordA, freqA] = a;
  const [wordB, freqB] = b;

  if (freqA !== freqB) return freqB - freqA;
  if (wordA.length !== wordB.length) return wordB.length - wordA.length;
  return wordA.localeCompare(wordB);
});

console.log(result.map(([word]) => word).join("\n"));
