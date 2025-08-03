const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const chars = input[1].split(" ").sort();

const isVowel = (ch) => "aeiou".includes(ch);
const result = [];

const dfs = (start, path) => {
  if (path.length === L) {
    const vowels = path.filter(isVowel).length;
    const consonants = path.length - vowels;
    if (vowels >= 1 && consonants >= 2) {
      result.push(path.join(""));
    }
    return;
  }

  for (let i = start; i < C; i++) {
    dfs(i + 1, [...path, chars[i]]);
  }
};

dfs(0, []);

console.log(result.join("\n"));
