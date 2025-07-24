const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const freq = {};
for (let char of input) {
  freq[char] = (freq[char] || 0) + 1;
}

let oddCount = 0;
let oddChar = "";

for (let ch in freq) {
  if (freq[ch] % 2 === 1) {
    oddCount++;
    oddChar = ch;
  }
}

if (oddCount > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  const keys = Object.keys(freq).sort();
  let half = "";

  for (let ch of keys) {
    half += ch.repeat(Math.floor(freq[ch] / 2));
  }

  const reversed = half.split("").reverse().join("");
  const center = oddCount === 1 ? oddChar : "";

  console.log(half + center + reversed);
}
